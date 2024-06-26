// "use client";
// import {
//   MessageSquare,
//   VideoIcon,
//   Music,
//   ImageIcon,
//   MusicIcon,
//   CodeIcon,
// } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { ArrowRight } from "lucide-react";
// {
//   /*------------------------------------------ */
// }

// import { Card } from "@/components/ui/card";
// export default function DashboardPage() {
//   const tools = [
//     {
//       label: "Conversation",
//       icon: MessageSquare,
//       color: "text-violet-700",
//       bgColor: "bg-violet-700/10",
//       href: "/conversation",
//     },
//     {
//       label: "Image Generation",
//       icon: ImageIcon,
//       color: "text-pink-700",
//       bgColor: "bg-pink-700/10",
//       href: "/image",
//     },
//     {
//       label: "Video Generation",
//       icon: VideoIcon,
//       color: "text-orange-700",
//       bgColor: "bg-orange-700/10",
//       href: "/video",
//     },
//     {
//       label: "Music Generation",
//       icon: MusicIcon,
//       color: "text-emerald-500",
//       bgColor: "bg-emerald-500/10",
//       href: "/music",
//     },
//     {
//       label: "Code Generation",
//       icon: CodeIcon,
//       color: "text-green-500",
//       bgColor: "bg-green-500/10",
//       href: "/code",
//     },
//   ];
//   return (
//     <div>
//       <div className="mb-8 space-y-4 ">
//         <h2 className="text-2xl md:text-4xl font-bold text-center">
//           Yapay Zekanin gucunu kesfedin.
//         </h2>
//         <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
//           En akilli yapay zeka ile yazisin - Yapay Zekanin gucunu kesfedin
//         </p>
//       </div>
//       {/*/NOTE - card component will fit be below*/}
//       <div className="px-4 md:px-20 lg:px-32 space-y-4">
//         {tools.map((tool) => (
//           <Card
//             key={tool.href}
//             className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer "
//           >
//             <div className="flex items-center  gap-x-4 ">
//               <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
//                 <tool.icon className={cn("w-8 h-8", tool.color)} />
//               </div>
//               <div className="font-semibold">{tool.label}</div>
//             </div>
//             <ArrowRight className="w-5 h-5" />
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import {
  MessageSquare,
  VideoIcon,
  MusicIcon,
  ImageIcon,
  CodeIcon,
} from "lucide-react";

export default function DashboardPage() {
  const tools = [
    {
      label: "Conversation",
      icon: MessageSquare,
      color: "text-violet-700",
      bgColor: "bg-violet-700/10",
      href: "/conversation",
    },
    {
      label: "Image Generation",
      icon: ImageIcon,
      color: "text-pink-700",
      bgColor: "bg-pink-700/10",
      href: "/image",
    },
    {
      label: "Video Generation",
      icon: VideoIcon,
      color: "text-orange-700",
      bgColor: "bg-orange-700/10",
      href: "/video",
    },
    {
      label: "Music Generation",
      icon: MusicIcon,
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
      href: "/music",
    },
    {
      label: "Code Generation",
      icon: CodeIcon,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      href: "/code",
    },
  ];

  return (
    <div>
      <div className="mb-8 space-y-4 mt-12">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the power of AI.
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Chat with the most advanced AI system. And go on an adventure.
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Link key={tool.href} href={tool.href} passHref>
            <Card className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer">
              <div className="flex items-center gap-x-4">
                <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                  <tool.icon className={cn("w-8 h-8", tool.color)} />
                </div>
                <div className="font-semibold">{tool.label}</div>
              </div>
              <ArrowRight className="w-5 h-5" />
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
