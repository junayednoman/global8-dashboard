"use client";

import { ChevronDown } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface TableData {
  id: string;
  productName: string;
  price: number;
  totalSales: string;
  clicks: string;
  clicksVariant: "success" | "warning" | "default";
  totalSalesAmount: string;
}

interface ProductTableProps {
  data?: TableData[];
}

const defaultData: TableData[] = [
  {
    id: "1",
    productName: "Skating Gear",
    price: 50.0,
    totalSales: "$50k",
    clicks: "10k+ Clicks",
    clicksVariant: "success",
    totalSalesAmount: "$50k",
  },
  {
    id: "2",
    productName: "Skating Gear",
    price: 50.0,
    totalSales: "$50k",
    clicks: "2k+ Clicks",
    clicksVariant: "warning",
    totalSalesAmount: "$50k",
  },
  {
    id: "3",
    productName: "Skating Gear",
    price: 50.0,
    totalSales: "$50k",
    clicks: "0k+ Clicks",
    clicksVariant: "default",
    totalSalesAmount: "$50k",
  },
];

export function ProductTable({ data = defaultData }: ProductTableProps) {
  return (
    <div className="w-full rounded-lg border border-border bg-card overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="border-b border-border hover:bg-transparent">
            <TableHead className="text-muted-foreground">
              Products name
            </TableHead>
            <TableHead className="text-muted-foreground">Price</TableHead>
            <TableHead className="text-muted-foreground">Total Sales</TableHead>
            <TableHead className="text-muted-foreground">Clicks</TableHead>
            <TableHead className="text-muted-foreground">Total Sales</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id} className="border-b border-border/50">
              <TableCell className="font-medium text-foreground">
                {row.productName}
              </TableCell>
              <TableCell className="text-foreground">
                ${row.price.toFixed(2)}
              </TableCell>
              <TableCell className="text-foreground">
                {row.totalSales}
              </TableCell>
              <TableCell>
                <ClicksBadge variant={row.clicksVariant} label={row.clicks} />
              </TableCell>
              <TableCell className="text-foreground">
                {row.totalSalesAmount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

interface ClicksBadgeProps {
  variant: "success" | "warning" | "default";
  label: string;
}

function ClicksBadge({ variant, label }: ClicksBadgeProps) {
  const variantStyles = {
    success: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    warning: "bg-red-500/20 text-red-400 border-red-500/30",
    default: "bg-muted text-muted-foreground border-border",
  };

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm font-medium ${variantStyles[variant]}`}
    >
      <span>{label}</span>
      <ChevronDown className="h-3 w-3" />
    </div>
  );
}
