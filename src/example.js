import React from "react";
import { Button, Flex, Input, Header, Popup } from "@fluentui/react-northstar";
import { MoreIcon, SearchIcon } from "@fluentui/react-icons-northstar";

const PopupFocusTrapExample = () => (
  <Flex gap="gap.smaller">
    <Popup
      /** Provided prop introduces focus trap to popup content. */
      trapFocus
      trigger={<Button icon={<MoreIcon />} content="Button will be focused" />}
      content={{
        "aria-labelledby": "label1",
        "aria-describedby": "desc1",
        content: (
          <>
            This should not be read
            <Header id="label1" as="h4">
              With Button
            </Header>
            <div id="desc1">Description text</div>
            <Button content="Save" />
          </>
        )
      }}
    />

    <Popup
      trapFocus
      trigger={<Button icon={<MoreIcon />} content="Input will be focused" />}
      content={{
        "aria-labelledby": "label1",
        "aria-describedby": "desc1",
        content: (
          <>
            This should not be read
            <Header id="label1" as="h4">
              With input
            </Header>
            <div id="desc1">Description text</div>
            <Input icon={<SearchIcon />} placeholder="Search..." />
          </>
        )
      }}
    />
  </Flex>
);

export default PopupFocusTrapExample;
