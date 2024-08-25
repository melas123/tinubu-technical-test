import VirtualizedAutocomplete from "@components/virtualized-autocomplete/VirtualizedAutocomplete";
import { faker } from "@faker-js/faker";
import {
  Alert,
  Box,
  Card,
  Container,
  Snackbar,
  Typography,
} from "@mui/material";
import ModalBroker from "@sections/quotations/modal-broker/ModalBroker";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Broker from "src/models/broker.type";

function Parties() {
  const { t: translate } = useTranslation();
  const [broker, setBroker] = useState<Broker | undefined>(undefined);
  const [open, setOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const defaultOptions: Broker[] = faker.helpers.multiple(
    () => {
      return {
        id: faker.string.uuid(),
        name: faker.company.name(),
        address: faker.location.streetAddress(),
        city: faker.location.city(),
        country: faker.location.country(),
      };
    },
    {
      count: 1000,
    }
  );
  const [options, setOptions] = useState<Broker[]>(defaultOptions);

  const description =
    "Soluta deserunt eos quam reiciendis libero autem enim nam ut.Voluptate aut aut.";

  const onSelectBroker = (broker: Broker) => {
    setBroker(broker);
  };

  const onAddBroker = () => {
    setOpen(true);
  };

  const handleSave = (broker: Broker) => {
    setShowToast(true);
    broker.id = faker.string.uuid();
    setBroker(broker);
    setOptions([...options, broker as Broker]);
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Card
        sx={{
          width: "60%",
          display: "flex",
          flexDirection: "column",
          padding: "1rem",
          margin: "1rem",
          gap: "1rem",
        }}
      >
        <Typography variant="h6" textAlign="left">
          {translate("managing_broker")}
        </Typography>
        <Typography variant="body2" textAlign="left">
          {description}
        </Typography>
        <VirtualizedAutocomplete
          onSelect={onSelectBroker}
          onAdd={onAddBroker}
          options={options}
          value={broker as Broker}
        />
        {broker && (
          <Container
            disableGutters
            sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <Box display={"flex"} flexDirection={"column"}>
              <Typography variant="h6" textAlign="left">
                {translate("address")}
              </Typography>
              <Typography variant="body2" textAlign="left">
                {broker.address}
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" textAlign="left">
                {translate("country")}
              </Typography>
              <Typography variant="body2" textAlign="left">
                {broker.country}
              </Typography>
            </Box>
          </Container>
        )}
      </Card>

      <ModalBroker
        open={open}
        handleClose={handleClose}
        handleSave={handleSave}
      />
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={showToast}
        autoHideDuration={1000}
        onClose={() => setShowToast(false)}
      >
        <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
          {translate("broker_added")}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Parties;
