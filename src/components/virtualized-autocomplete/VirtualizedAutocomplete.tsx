import ListboxComponent from "@components/list-box-component/ListboxComponent";
import { Autocomplete, Button, Chip, Paper, TextField } from "@mui/material";
import * as React from "react";
import { useTranslation } from "react-i18next";

function VirtualizedAutocomplete(props: {
  onSelect: Function;
  onAdd: Function;
  options: Array<any>;
  value: any;
}) {
  const { onSelect, onAdd, options, value } = props;
  const { t: translate } = useTranslation();

  return (
    <Autocomplete
      id="virtualize-demo"
      sx={{ width: "100%", height: "30%" }}
      disableListWrap
      value={value || null}
      onChange={(_event, value) => onSelect(value)}
      disablePortal={false}
      PaperComponent={({ children }) => {
        return (
          <Paper>
            {children}
            <Button
              color="primary"
              fullWidth
              sx={{ justifyContent: "flex-start", width: "100%", p: 2 }}
              onMouseDown={() => {
                onAdd();
              }}
            >
              {translate("add_manually")}
            </Button>
          </Paper>
        );
      }}
      ListboxComponent={
        ListboxComponent as React.ComponentType<
          React.HTMLAttributes<HTMLElement>
        >
      }
      options={options}
      getOptionLabel={(option: any) => option.name}
      getOptionKey={(option: any) => option.id || option.name}
      renderInput={(params) => (
        <TextField
          {...params}
          InputLabelProps={{ shrink: true }}
          label={translate("name")}
        />
      )}
      renderOption={(props, option, state) =>
        [props, option, state.index] as any
      }
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            variant="outlined"
            label={option.name}
            {...getTagProps({ index })}
          />
        ))
      }
    />
  );
}

export default VirtualizedAutocomplete;
