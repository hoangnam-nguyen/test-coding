import React from "react";
import { Wrap, WrapItem } from "@chakra-ui/react";
import { firestore } from "../src/config/firebase.config";
import { withProtected } from "../src/hook/route";
import Card from "../components/Card";

interface BlogProps {
  auth: any;
  entries: any;
}

interface EntryComponents {
  id: string;
  title: string;
  image: string;
  description: string;
  date: string;
  topic: string;
}

function Blog(props: BlogProps) {
  const { entries } = props;

  return (
    <Wrap spacing="20px" m="20px">
      {entries.map((entry: EntryComponents) => {
        return (
          <WrapItem key={entry.id}>
            <Card {...entry} />
          </WrapItem>
        );
      })}
    </Wrap>
  );
}

export default withProtected(Blog);

export async function getServerSideProps() {
  const entries = await firestore.collection("cards").get();
  const entriesData = entries.docs.map((entry) => ({
    id: entry.id,
    ...entry.data(),
  }));

  return {
    props: { entries: entriesData },
  };
}
