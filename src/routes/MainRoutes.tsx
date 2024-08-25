import AuditLog from "@pages/audit-log/AuditLog";
import Dashboard from "@pages/dashboard/Dashboard";
import Policies from "@pages/policies/Policies";
import Quotations from "@pages/quotations/Quotations";
import Submissions from "@pages/submissions/Submissions";
import { Route, Routes } from "react-router-dom";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/submissions" element={<Submissions />} />
      <Route path="/quotations" element={<Quotations />} />
      <Route path="/policies" element={<Policies />} />
      <Route path="/audit-log" element={<AuditLog />} />
    </Routes>
  );
};

export default MainRoutes;
