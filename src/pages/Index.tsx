import { StatCard } from "@/components/dashboard/StatCard";
import { MainLayout } from "@/components/layout/MainLayout";

const Index = () => {
  return (
    <MainLayout>
      <StatCard count={23} label="Casos activos" />
      <StatCard count={6} label="Actividades pendientes" />
    </MainLayout>
  );
};

export default Index;
