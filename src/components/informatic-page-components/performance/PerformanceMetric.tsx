"use client";

import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle, XCircle } from "lucide-react";
import type { PerformanceMetric as PerformanceMetricType } from "../types";

interface PerformanceMetricProps {
  metric: PerformanceMetricType;
  index: number;
}

const statusConfig = {
  excellent: {
    icon: CheckCircle2,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
  },
  good: {
    icon: AlertCircle,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  "needs-improvement": {
    icon: XCircle,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
  },
};

export default function PerformanceMetric({
  metric,
  index,
}: PerformanceMetricProps) {
  const config = statusConfig[metric.status];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`bg-white rounded-xl border-2 ${config.borderColor} p-xl md:p-2xl shadow-sm`}
    >
      <div className="flex items-start justify-between mb-md">
        <div className="flex-1">
          <div className="flex items-center gap-sm mb-sm">
            <Icon className={`w-5 h-5 ${config.color}`} />
            <h3 className="text-lg md:text-xl font-montserrat font-semibold text-gray-900">
              {metric.name}
            </h3>
          </div>
          <p className="text-sm text-gray-500 font-montserrat mb-md">
            {metric.category}
          </p>
        </div>
      </div>

      <div className="space-y-sm">
        <div className="flex items-baseline gap-md">
          <span className="text-2xl md:text-3xl font-montserrat font-bold text-gray-900">
            {metric.value}
          </span>
          <span className="text-sm text-gray-500 font-montserrat">
            {metric.unit}
          </span>
        </div>
        <div className="text-xs text-gray-500 font-montserrat">
          Target: {metric.target} {metric.unit}
        </div>
        <p className="text-sm text-gray-600 font-montserrat leading-relaxed pt-sm border-t border-gray-100">
          {metric.description}
        </p>
      </div>
    </motion.div>
  );
}

