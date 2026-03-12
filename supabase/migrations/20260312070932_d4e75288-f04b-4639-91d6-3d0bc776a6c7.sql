CREATE TABLE public.orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  telegram text DEFAULT '',
  tariff text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert orders" ON public.orders FOR INSERT TO public WITH CHECK (true);
CREATE POLICY "Anyone can view orders" ON public.orders FOR SELECT TO public USING (true);
CREATE POLICY "Anyone can delete orders" ON public.orders FOR DELETE TO public USING (true);