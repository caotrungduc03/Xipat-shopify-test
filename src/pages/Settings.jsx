import { Button, FormLayout, Icon, TextField } from "@shopify/polaris";
import { DeleteIcon } from "@shopify/polaris-icons";
import { useState } from "react";

const Settings = () => {
  const [rules, setRules] = useState([
    {
      buyFrom: "",
      buyTo: "",
      discount: "",
    },
  ]);
  const [settings, setSettings] = useState({
    title: "",
    startDate: "",
    endDate: "",
  });

  const handleSettingsChange = (value, fieldName) => {
    setSettings((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  const handleAddRule = () => {
    setRules((prevRules) => [
      ...prevRules,
      { buyFrom: "", buyTo: "", discount: "" },
    ]);
  };

  const handleRuleChange = (value, ruleIndex, fieldName) => {
    setRules((prevRules) => {
      const updatedRules = [...prevRules];
      updatedRules[ruleIndex][fieldName] = value;
      return updatedRules;
    });
  };

  const handleRemoveRule = (ruleIndex) => {
    setRules((prevRules) => {
      const updatedRules = [...prevRules];
      updatedRules.splice(ruleIndex, 1);
      return updatedRules;
    });
  };

  const handleSave = () => {
    if (!settings.title || !settings.startDate || !settings.endDate) {
      console.log("Please fill in all settings fields.");
      return;
    }

    if (new Date(settings.endDate) <= new Date(settings.startDate)) {
      console.log("End date must be after start date.");
      return;
    }

    for (const rule of rules) {
      if (
        !rule.buyFrom ||
        !rule.buyTo ||
        !rule.discount ||
        parseInt(rule.buyTo) <= parseInt(rule.buyFrom)
      ) {
        console.log(
          "Invalid rule values. Buy to must be greater than buy from."
        );
        return;
      }
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1
        style={{
          fontSize: "20px",
          fontWeight: 600,
          lineHeight: "24px",
          marginBottom: "20px",
        }}
      >
        Settings
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          maxWidth: "600px",
        }}
      >
        <h2
          style={{
            fontSize: "16px",
            fontWeight: 600,
          }}
        >
          Add rule
        </h2>
        <FormLayout>
          <FormLayout.Group condensed>
            <TextField
              type="text"
              label="Title"
              value={settings.title}
              onChange={(value) => handleSettingsChange(value, "title")}
            />
            <TextField
              type="text"
              label="Start date"
              value={settings.startDate}
              onChange={(value) => handleSettingsChange(value, "startDate")}
            />
            <TextField
              type="text"
              label="End date"
              value={settings.endDate}
              onChange={(value) => handleSettingsChange(value, "endDate")}
            />
          </FormLayout.Group>
          {rules.map((rule, index) => (
            <div key={index} style={{ display: "flex", gap: "10px" }}>
              <FormLayout.Group condensed>
                <TextField
                  type="text"
                  label="Buy from"
                  value={rule.buyFrom}
                  onChange={(value) =>
                    handleRuleChange(value, index, "buyFrom")
                  }
                />
                <TextField
                  type="text"
                  label="Buy to"
                  value={rule.buyTo}
                  onChange={(value) => handleRuleChange(value, index, "buyTo")}
                />
                <TextField
                  type="number"
                  label="Discount of item (%)"
                  value={rule.discount}
                  onChange={(value) =>
                    handleRuleChange(value, index, "discount")
                  }
                />
              </FormLayout.Group>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  cursor: "pointer",
                }}
                onClick={() => handleRemoveRule(index)}
              >
                <Icon source={DeleteIcon} />
              </div>
            </div>
          ))}
          <Button variant="primary" onClick={handleAddRule}>
            Add rule
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </FormLayout>
      </div>
    </div>
  );
};

export default Settings;
