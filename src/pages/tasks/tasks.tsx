import ChoosenTask from "@/widgets/choosenTask";
import Layout from "@/widgets/layout";
import TasksList from "@/widgets/tasksList";

export default function Tasks() {
  return (
    <Layout>
      <div className="w-full h-full flex flex-row justify-center items-center">
        <TasksList />
        <ChoosenTask />
      </div>
    </Layout>
  );
}
