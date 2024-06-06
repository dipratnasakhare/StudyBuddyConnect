import React from "react";
import {
  Box,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import LoginBC from "../../images/LoginBC.jpg";

import { SignIn } from "./SignIn/SignIn";


export const Authentication = () => {
  return (
    <Box
      h={"120vh"}
      backgroundPosition={"center"}
      backgroundSize={"cover"}
      backgroundImage={LoginBC}
      pt={"10"}
    >
      <Box>
        <Tabs isFitted variant="soft-rounded">
          <TabPanels>
            <TabPanel>
              <SignIn />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};
