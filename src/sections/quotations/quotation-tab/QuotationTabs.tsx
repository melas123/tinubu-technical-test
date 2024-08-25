import { Box, Tab, Tabs } from "@mui/material";
import Parties from "@sections/quotations/parties/Parties";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function QuotationTabs() {
  const [value, setValue] = useState("parties");
  const { t: translate } = useTranslation();

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const tabsList = [
    { label: translate("parties"), value: "parties" },
    { label: translate("coverage"), value: "coverage" },
    { label: translate("premium"), value: "premium" },
    { label: translate("fees"), value: "fees" },
    {
      label: translate("discretionary_credit_limit"),
      value: "discretionary credit limit",
    },
    { label: translate("claims"), value: "claims" },
    { label: translate("political_risk"), value: "political risk" },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        variant="scrollable"
        scrollButtons="auto"
      >
        {tabsList.map((tab) => (
          <Tab value={tab.value} label={tab.label} key={tab.value} />
        ))}
      </Tabs>
      {value === tabsList[0].value && <Parties />}
    </Box>
  );
}

export default QuotationTabs;
