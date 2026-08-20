import ProjectDetail from "@/components/projects/projectDetail";
import { ProjectsInfo } from "@/dummies/ProjectsInfo";

export default function Deplog() {
  const project = ProjectsInfo.find(
    (project) => project.id === "thingo"
  );

  if (!project) {
    return <div>프로젝트를 찾을 수 없습니다.</div>;
  }

  return <ProjectDetail project={project} />;
}