import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/shadcn-ui/tabs";
import ReportsBrief from "../../data/reports-brief";

export default function List() {
  return (
    <div id="shadcn-tabs-component">
      <Tabs defaultValue="unclaimed">
        <TabsList>
          <TabsTrigger value="unclaimed">Unclaimed</TabsTrigger>
          <TabsTrigger value="progress">Progress</TabsTrigger>
          <TabsTrigger value="closed">Closed</TabsTrigger>
        </TabsList>
        <TabsContent value="unclaimed">
          <ReportsBrief />
        </TabsContent>
        <TabsContent value="progress">
          Here are cases that are in-progress.
        </TabsContent>
        <TabsContent value="closed">Here are closed cases.</TabsContent>
      </Tabs>
    </div>
  );
}
