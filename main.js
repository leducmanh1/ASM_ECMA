import "bootstrap/dist/css/bootstrap.min.css";
import {render, router } from "./lib";

import HeaderPage from "./components/Header";
import ProfilePage from "./components/ProfilePage";
import About from "./components/About";
import MySkill from "./components/MySkill";
import Education from "./components/Education";
import Footer from "./components/Footer";
import AdminAddCatePage from "./components/formAdd";
import Projects from "./components/Projects";
import DetailCategoryPage from "./admin/category-detail";
// admin
import projectsShow from "./admin/danhmuc/projectsShow";
import AdminAddProjectPage from "./admin/danhmuc/addProjects";
import AdminEditProjectPage from "./admin/danhmuc/projectsEdit";


const HeaderPageLoad = document.querySelector(".header");
const profilePageLoad = document.querySelector(".profilePage");
const aboutPageLoad = document.querySelector(".aboutPage");
const mySkillPageLoad = document.querySelector(".containerPage");
const educationPageLoad = document.querySelector(".educationPage");
const footerPageLoad = document.querySelector(".footerPage");
const projectsPageLoad = document.querySelector(".projectsPage");
const formAddLoad = document.querySelector("#top");



render(HeaderPage, HeaderPageLoad);
render(ProfilePage, profilePageLoad);
render(About, aboutPageLoad);
render(MySkill, mySkillPageLoad);
render(Education, educationPageLoad);
render(Footer, footerPageLoad);
render(Projects, projectsPageLoad); 

router.on("#/", () => render(HeaderPage, HeaderPageLoad));
router.on("/formadd", () => render(AdminAddCatePage, formAddLoad));    
router.on("/category", () => render(Projects, projectsPageLoad));
router.on("/admin/projects/add", () => render(AdminAddProjectPage, formAddLoad));
// router dưới đổi sang trang chi tiết sản phẩm

router.on("/category/:id", ({data}) => render( () => DetailCategoryPage(data), formAddLoad));
router.on("/admin/showprojects", () => render(projectsShow, formAddLoad));
router.on("/admin/showprojects/:id/edit", ({ data }) => render(() => AdminEditProjectPage(data), formAddLoad));

router.resolve();
