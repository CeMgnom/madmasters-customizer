
-- Create portfolio_images table
CREATE TABLE public.portfolio_images (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL DEFAULT '',
  image_url TEXT NOT NULL,
  display_order INT NOT NULL DEFAULT 0,
  show_on_main BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.portfolio_images ENABLE ROW LEVEL SECURITY;

-- Public read access
CREATE POLICY "Anyone can view portfolio images"
  ON public.portfolio_images FOR SELECT USING (true);

-- Admin insert/update/delete (no auth for now, will be managed via admin page with password)
CREATE POLICY "Anyone can insert portfolio images"
  ON public.portfolio_images FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can update portfolio images"
  ON public.portfolio_images FOR UPDATE USING (true);

CREATE POLICY "Anyone can delete portfolio images"
  ON public.portfolio_images FOR DELETE USING (true);

-- Create storage bucket for portfolio images
INSERT INTO storage.buckets (id, name, public) VALUES ('portfolio', 'portfolio', true);

-- Storage policies
CREATE POLICY "Portfolio images are publicly accessible"
  ON storage.objects FOR SELECT USING (bucket_id = 'portfolio');

CREATE POLICY "Anyone can upload portfolio images"
  ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'portfolio');

CREATE POLICY "Anyone can update portfolio images"
  ON storage.objects FOR UPDATE USING (bucket_id = 'portfolio');

CREATE POLICY "Anyone can delete portfolio images"
  ON storage.objects FOR DELETE USING (bucket_id = 'portfolio');
