import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Events from "../tabContent/Events";
import Products from "../tabContent/Products";
import Posts from "../tabContent/Posts";

const DashboardTabs = () => {
  return (
    <Tabs defaultValue="events">
      <TabsList className="w-full h-12 p-1 mb-2">
        <TabsTrigger value="events">Events</TabsTrigger>
        <TabsTrigger value="products">Products</TabsTrigger>
        <TabsTrigger value="posts">Posts</TabsTrigger>
      </TabsList>
      <TabsContent value="events">
        <Events />
      </TabsContent>
      <TabsContent value="products">
        <Products />
      </TabsContent>
      <TabsContent value="posts">
        <Posts />
      </TabsContent>
    </Tabs>
  );
};

export default DashboardTabs;
