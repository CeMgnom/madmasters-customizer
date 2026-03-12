import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Trash2, Upload, Eye, EyeOff, ClipboardList, Image } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ADMIN_PASSWORD = "madmasters2024";

const Admin = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [images, setImages] = useState<any[]>([]);
  const [orders, setOrders] = useState<any[]>([]);
  const [uploading, setUploading] = useState(false);
  const [title, setTitle] = useState("");
  const [showOnMain, setShowOnMain] = useState(false);
  const [activeTab, setActiveTab] = useState<"portfolio" | "orders">("portfolio");

  const login = () => {
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
      toast.success("Вход выполнен");
    } else {
      toast.error("Неверный пароль");
    }
  };

  const fetchImages = async () => {
    const { data } = await supabase
      .from("portfolio_images")
      .select("*")
      .order("display_order", { ascending: true });
    setImages(data || []);
  };

  const fetchOrders = async () => {
    const { data } = await supabase
      .from("orders")
      .select("*")
      .order("created_at", { ascending: false });
    setOrders(data || []);
  };

  useEffect(() => {
    if (authenticated) {
      fetchImages();
      fetchOrders();
    }
  }, [authenticated]);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const fileName = `${Date.now()}-${file.name}`;
      const { error: uploadError } = await supabase.storage
        .from("portfolio")
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const { data: urlData } = supabase.storage
        .from("portfolio")
        .getPublicUrl(fileName);

      await supabase.from("portfolio_images").insert({
        title: title || file.name,
        image_url: urlData.publicUrl,
        show_on_main: showOnMain,
        display_order: images.length,
      });

      toast.success("Изображение загружено!");
      setTitle("");
      setShowOnMain(false);
      fetchImages();
    } catch (err: any) {
      toast.error("Ошибка загрузки: " + err.message);
    } finally {
      setUploading(false);
    }
  };

  const deleteImage = async (id: string, imageUrl: string) => {
    try {
      const path = imageUrl.split("/portfolio/")[1];
      if (path) {
        await supabase.storage.from("portfolio").remove([path]);
      }
      await supabase.from("portfolio_images").delete().eq("id", id);
      toast.success("Удалено");
      fetchImages();
    } catch {
      toast.error("Ошибка удаления");
    }
  };

  const deleteOrder = async (id: string) => {
    try {
      await supabase.from("orders").delete().eq("id", id);
      toast.success("Заявка удалена");
      fetchOrders();
    } catch {
      toast.error("Ошибка удаления");
    }
  };

  const toggleMainDisplay = async (id: string, current: boolean) => {
    await supabase
      .from("portfolio_images")
      .update({ show_on_main: !current })
      .eq("id", id);
    fetchImages();
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="gradient-card rounded-xl p-8 glow-border shadow-card w-full max-w-sm space-y-4">
          <h1 className="text-2xl font-display font-bold text-gradient text-center">Админ панель</h1>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Пароль"
            className="bg-muted border-border text-foreground"
            onKeyDown={(e) => e.key === "Enter" && login()}
          />
          <Button onClick={login} className="w-full gradient-primary text-primary-foreground">
            Войти
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-display font-bold text-gradient mb-8">Админ панель</h1>

        {/* Tabs */}
        <div className="flex gap-2 mb-8">
          <Button
            variant={activeTab === "portfolio" ? "default" : "outline"}
            onClick={() => setActiveTab("portfolio")}
            className={activeTab === "portfolio" ? "gradient-primary text-primary-foreground" : "border-border"}
          >
            <Image size={16} className="mr-2" />
            Портфолио
          </Button>
          <Button
            variant={activeTab === "orders" ? "default" : "outline"}
            onClick={() => setActiveTab("orders")}
            className={activeTab === "orders" ? "gradient-primary text-primary-foreground" : "border-border"}
          >
            <ClipboardList size={16} className="mr-2" />
            Заявки {orders.length > 0 && `(${orders.length})`}
          </Button>
        </div>

        {activeTab === "portfolio" && (
          <>
            {/* Upload form */}
            <div className="gradient-card rounded-xl p-6 glow-border shadow-card mb-8 space-y-4">
              <h2 className="text-lg font-display font-semibold text-foreground">Загрузить изображение</h2>
              <div>
                <Label className="text-foreground text-sm mb-1.5 block">Название</Label>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Название работы"
                  className="bg-muted border-border text-foreground"
                />
              </div>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showOnMain}
                  onChange={(e) => setShowOnMain(e.target.checked)}
                  className="accent-primary"
                />
                <span className="text-sm text-foreground">Показывать на главной (блок «Наши работы»)</span>
              </label>
              <label className="inline-flex items-center gap-2 cursor-pointer">
                <Button disabled={uploading} className="gradient-primary text-primary-foreground" asChild>
                  <span>
                    <Upload size={16} className="mr-2" />
                    {uploading ? "Загрузка..." : "Выбрать файл"}
                  </span>
                </Button>
                <input type="file" accept="image/*" onChange={handleUpload} className="hidden" />
              </label>
            </div>

            {/* Images grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {images.map((img) => (
                <div key={img.id} className="relative group rounded-xl overflow-hidden glow-border shadow-card">
                  <img src={img.image_url} alt={img.title} className="w-full aspect-square object-cover" />
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                    <span className="text-sm text-foreground font-display">{img.title}</span>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => toggleMainDisplay(img.id, img.show_on_main)}
                        className="border-primary/40"
                      >
                        {img.show_on_main ? <Eye size={14} /> : <EyeOff size={14} />}
                        <span className="ml-1 text-xs">{img.show_on_main ? "На главной" : "Скрыто"}</span>
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => deleteImage(img.id, img.image_url)}
                      >
                        <Trash2 size={14} />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {images.length === 0 && (
              <p className="text-center text-muted-foreground mt-8">Нет загруженных изображений</p>
            )}
          </>
        )}

        {activeTab === "orders" && (
          <div className="gradient-card rounded-xl glow-border shadow-card overflow-hidden">
            {orders.length === 0 ? (
              <p className="text-center text-muted-foreground py-12">Нет заявок</p>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow className="border-border">
                    <TableHead className="text-muted-foreground">Дата</TableHead>
                    <TableHead className="text-muted-foreground">Имя</TableHead>
                    <TableHead className="text-muted-foreground">Телефон</TableHead>
                    <TableHead className="text-muted-foreground">Телеграм</TableHead>
                    <TableHead className="text-muted-foreground">Тариф</TableHead>
                    <TableHead className="text-muted-foreground w-12"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.map((order) => (
                    <TableRow key={order.id} className="border-border">
                      <TableCell className="text-foreground text-sm">
                        {new Date(order.created_at).toLocaleString("ru-RU", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "2-digit",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </TableCell>
                      <TableCell className="text-foreground font-medium">{order.name}</TableCell>
                      <TableCell className="text-foreground">{order.phone}</TableCell>
                      <TableCell className="text-foreground">{order.telegram || "—"}</TableCell>
                      <TableCell className="text-foreground text-sm">{order.tariff}</TableCell>
                      <TableCell>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => deleteOrder(order.id)}
                        >
                          <Trash2 size={14} />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
