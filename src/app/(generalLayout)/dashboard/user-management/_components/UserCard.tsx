import { AAlertDialog } from "@/components/modal/AAlertDialog";
import { Badge } from "@/components/ui/badge";
import { Eye, Lock } from "lucide-react";
import Image from "next/image";
import { AccountComplainDetailsModal } from "../../complaints/_components/modal/AccountDetailsModal";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function UserCard() {
  const handleChangeStatus = () => {};
  return (
    <div className="flex items-center justify-between p-4 rounded-lg border border-border  transition-colors">
      <Link href={"/dashboard/user-management"} className="flex gap-2">
        {/* Profile Image */}
        <Image
          src={
            "https://static.vecteezy.com/system/resources/previews/023/402/465/non_2x/man-avatar-free-vector.jpg"
          }
          alt={"Sarah Johnson"}
          width={50}
          height={50}
          className="rounded-full mr-3"
        />

        <div className="flex flex-col">
          Junayed Noman
          <p className="text-sm text-muted-foreground">
            junayednoman@gmail.com
          </p>
        </div>

        <div>
          <Badge variant="default" className="bg-green-600/20 text-green-600">
            active
          </Badge>
        </div>
      </Link>

      <div className="flex items-center gap-2">
        <AccountComplainDetailsModal
          user={{
            name: "Michael Epkot",
            role: "Flutter Developer",
            avatar:
              "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?semt=ais_hybrid&w=740&q=80",
          }}
          post={{
            content:
              "Everyone on this platform is so stupid, it's embarrassing. You all suck and are a bunch of losers.",
            stats: "◉ 10K Views • 30 mins",
          }}
          reasons={[
            "Just to let you know this might be a problem",
            "Disrespectful and harmful behavior",
            "Violating platform's harassment policy",
          ]}
          onRestrict={() => console.log("User restricted")}
          onRestrictDelete={() => console.log("User restricted & post deleted")}
        >
          <Button className="w-9">
            <Eye />
          </Button>
        </AccountComplainDetailsModal>
        <AAlertDialog onAction={handleChangeStatus}>
          <Button className="bg-destructive w-9 hover:bg-destructive">
            <Lock />
          </Button>
        </AAlertDialog>
      </div>
    </div>
  );
}
