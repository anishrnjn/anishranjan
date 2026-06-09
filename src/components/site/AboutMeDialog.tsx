import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ArrowUpRight } from "lucide-react";

const pdfs = [
  { id: "1Sm6RLRck7zbYBxIK6Lc1Bhaab8QaZFfM", label: "Profile" },
  { id: "15B8FIwdrEttFGxeysJVI5-anZt0StbbA", label: "Brand Strategy" },
  { id: "1WEEHgkXWIQ9smIhV7jDibwbsJyDaH9bq", label: "Content & Creative" },
  { id: "1NB7C7BXdNM1yjaOtfvukRpTTUm3FmTT6", label: "Creative Direction" },
  { id: "1dX_hxA_0PwOhKtHb16yjUfi4bXDEabZ4", label: "AI-Driven Marcom" },
];

export function AboutMeDialog({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState(pdfs[0].id);

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-5xl w-[95vw] h-[90vh] p-0 gap-0 flex flex-col">
        <DialogHeader className="px-6 pt-6 pb-3 border-b border-border">
          <DialogTitle className="font-display text-xl">About Me — In Detail</DialogTitle>
        </DialogHeader>
        <Tabs value={active} onValueChange={setActive} className="flex-1 flex flex-col min-h-0">
          <div className="px-6 pt-3 overflow-x-auto">
            <TabsList className="inline-flex">
              {pdfs.map((p) => (
                <TabsTrigger key={p.id} value={p.id} className="text-xs sm:text-sm">
                  {p.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          {pdfs.map((p) => (
            <TabsContent key={p.id} value={p.id} className="flex-1 mt-3 px-6 pb-6 min-h-0 data-[state=inactive]:hidden">
              <div className="h-full flex flex-col gap-2">
                <iframe
                  src={`https://drive.google.com/file/d/${p.id}/preview`}
                  title={p.label}
                  className="w-full flex-1 rounded-lg border border-border bg-surface"
                  allow="autoplay"
                />
                <a
                  href={`https://drive.google.com/file/d/${p.id}/view`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 self-end text-xs font-medium text-muted-foreground hover:text-foreground"
                >
                  Open in Google Drive <ArrowUpRight className="size-3" />
                </a>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
