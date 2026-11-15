import { Package, Wrench, Settings } from "lucide-react";
import activityInstallation from "@/assets/activity-installation.jpg";
import activityMaintenance from "@/assets/activity-maintenance.jpg";
import activityTrading from "@/assets/activity-trading.jpg";

export const services = [
  { icon: Package, slug: "trading-supply", num: "01", title: "Trading & Supply", desc: "Transformers (MV & HV), switchgear & protection equipment, cables & conductors for all your electrical infrastructure needs.", image: activityTrading },
  { icon: Wrench, slug: "installation-commissioning", num: "02", title: "Installation & Commissioning", desc: "Professional installation of transformers & substations, electrical wiring systems, and energy metering solutions.", image: activityInstallation },
  { icon: Settings, slug: "maintenance", num: "03", title: "Maintenance Services", desc: "Preventive & corrective maintenance, spare parts supply, and ongoing technical support for your systems.", image: activityMaintenance },
];

