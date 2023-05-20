import { InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import styled from "@emotion/styled";

export interface SelectColumnOption {
  label: string;
  value: string;
}

export interface SelectColumnProps {
  label: string;
  selectedValue: string | undefined;
  options: SelectColumnOption[];
  onChange: (value: string) => void;
}

const Wrapper = styled.div`
  overflow: visible;
  width: 100%;
  cursor: pointer;
`;

const LabelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledSelect = styled(Select)`
  position: absolute;
  left: 0;
  top: 0;
  visibility: hidden;
`;

export function SelectColumn({
  label,
  selectedValue,
  options,
  onChange,
}: SelectColumnProps) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <Wrapper onClick={() => setIsVisible(!isVisible)}>
      <LabelWrapper>
        <InputLabel>{label}</InputLabel>
        {!isVisible ? <ExpandMoreIcon /> : <ExpandLessIcon />}
      </LabelWrapper>
      {isVisible && (
        <StyledSelect
          value={selectedValue}
          label={label}
          open
          onChange={(event) => onChange(event.target.value + "")}
        >
          <MenuItem key="menu-item-none" value="">
            None
          </MenuItem>
          {options.map((option) => (
            <MenuItem key={`menu-item-${option.value}`} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </StyledSelect>
      )}
    </Wrapper>
  );
}
