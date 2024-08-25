import HomeIcon from "@mui/icons-material/Home";
import { Button, Chip, Container, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function QuotationHeader() {
  const { t: translate } = useTranslation();

  return (
    <Container disableGutters sx={{ display: "flex", flexDirection: "column" }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Container
          disableGutters
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Typography variant="body1">
            <HomeIcon sx={{ marginRight: "0.5rem", marginBottom: "-0.3rem" }} />{" "}
            / Quotations / Quotation / #54f4939c-bdc5-4b2a-96af-a8e187543c42
          </Typography>
        </Container>

        <Button
          variant="contained"
          color="inherit"
          startIcon=""
          sx={{ width: "15rem", backgroundColor: "#26BAD4", color: "white" }}
        >
          {translate("issue_proposal")}
        </Button>
      </Stack>
      <Container
        disableGutters
        sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}
      >
        <Typography variant="h6" sx={{ textAlign: "left" }}>
          PROPOSAL 20231018-1
        </Typography>
        <Chip label="Draft" />
      </Container>
    </Container>
  );
}

export default QuotationHeader;
