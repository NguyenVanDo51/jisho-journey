import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useSettings } from "@/contexts/SettingsContext";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Settings = () => {
  const { settings, toggleRomanji } = useSettings();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background border-b">
        <div className="flex items-center gap-3 p-4 max-w-lg mx-auto">
          <Link
            to="/"
            className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-accent transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <h1 className="text-xl font-semibold">Cài đặt</h1>
        </div>
      </header>

      {/* Settings Content */}
      <main className="p-4 max-w-lg mx-auto space-y-4 mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Hiển thị</CardTitle>
            <CardDescription>Tùy chọn hiển thị nội dung học tập</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="romanji-toggle" className="text-base">
                  Hiển thị Romanji
                </Label>
                <p className="text-sm text-muted-foreground">
                  Hiển thị cách đọc Romanji bên dưới chữ Nhật
                </p>
              </div>
              <Switch
                id="romanji-toggle"
                checked={settings.displayRomanji}
                onCheckedChange={toggleRomanji}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Về ứng dụng</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>Jisho Journey - Ứng dụng học từ vựng tiếng Nhật</p>
            <p>Phiên bản: 1.0.0</p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Settings;
