import { Container } from "@mui/material";
import QuotationHeader from "@sections/quotations/quotation-header/QuotationHeader";
import QuotationTabs from "@sections/quotations/quotation-tab/QuotationTabs";
import { FC } from "react";

const Quotations: FC = () => {
  return (
    <Container
      sx={{
        ml: { md: "20%", xs: "0" },
        width: "80%",
        p: 2,
      }}
    >
      <QuotationHeader />
      <QuotationTabs />
    </Container>
  );
};
export default Quotations;
