import Broker from "@models/broker.type";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function ModalBroker({ open, handleClose, handleSave }: any) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const { t: translate } = useTranslation();
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40%",
    backgroundColor: "#f8f9fc",
    p: 4,
    pt: 2,
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {translate("add_manually")}
        </Typography>
        <TextField
          error={!name}
          id="legal_name"
          label={translate("legal_name")}
          InputLabelProps={{ shrink: true }}
          required
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          error={!address}
          id="address"
          label={translate("address")}
          InputLabelProps={{ shrink: true }}
          required
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        <TextField
          error={!city}
          id="city"
          label={translate("city")}
          InputLabelProps={{ shrink: true }}
          required
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <TextField
          error={!country}
          id="country"
          label={translate("country")}
          InputLabelProps={{ shrink: true }}
          required
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        />

        <div
          style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}
        >
          <Button
            variant="outlined"
            color="secondary"
            sx={{ width: "5rem", color: "black" }}
            onClick={() => {
              handleClose();
            }}
          >
            {translate("cancel")}
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ width: "5rem" }}
            onClick={() => {
              if (!name || !address || !city || !country) {
                return;
              }
              const broker = new Broker({ name, address, city, country });
              handleSave(broker);
            }}
          >
            {translate("save")}
          </Button>
        </div>
      </Box>
    </Modal>
  );
}

export default ModalBroker;
