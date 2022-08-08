const courseRoot = "../00_service_assets/test/images/courses/";

var cookeryCourse 				= {};
cookeryCourse.title = "Cooking for Beginners"; 
cookeryCourse.image = courseRoot+"01_cookerycourse/course_pic.jpg"; 
cookeryCourse.category = "cooking"; 
cookeryCourse.categoryLink = "../15_course/course_search.html?category=cooking"; 
cookeryCourse.date = ""; 
cookeryCourse.school = "Decentralized Cookery";
cookeryCourse.studentCount = 17500;

var nftCourse 				= {};
nftCourse.title = "NFT Essentials"; 
nftCourse.image = courseRoot+"02_nftcourse/course_pic.jpg"; 
nftCourse.category = "nft"; 
nftCourse.categoryLink = "../15_course/course_search.html?category=nft"; 
nftCourse.date = ""; 
nftCourse.school = "W 3 NFT";
nftCourse.studentCount = 12500;

var codingCourse 				= {};
codingCourse.title = "Coding Nuances"; 
codingCourse.image = courseRoot+"03_codingCourse/course_pic.jpg"; 
codingCourse.category = "coding"; 
codingCourse.categoryLink = "../15_course/course_search.html?category=coding"; 
codingCourse.date = ""; 
codingCourse.school = "ML Python";
codingCourse.studentCount = 1500;

var poloCourse 				= {};
poloCourse.title = "Polo for Royals"; 
poloCourse.image = courseRoot+"03_codingCourse/course_pic.jpg"; 
poloCourse.category = "polo"; 
poloCourse.categoryLink = "../15_course/course_search.html?category=polo"; 
poloCourse.date = ""; 
poloCourse.school = "Quartet du Polo";
poloCourse.studentCount = 2500;

var dressMakingCourse 				= {};
dressMakingCourse.title = "From High Street to Coutoure"; 
dressMakingCourse.image = courseRoot+"03_codingCourse/course_pic.jpg"; 
dressMakingCourse.category = "fashion"; 
dressMakingCourse.categoryLink = "../15_course/course_search.html?category=fashion"; 
dressMakingCourse.date = ""; 
dressMakingCourse.school = "D's Dress Making";
dressMakingCourse.studentCount = 500;

var wineTastingCourse 				= {};
wineTastingCourse.title = "Red vs White the nuances"; 
wineTastingCourse.image = courseRoot+"03_codingCourse/course_pic.jpg"; 
wineTastingCourse.category = "wine_tasting"; 
wineTastingCourse.categoryLink = "../15_course/course_search.html?category=wine_tasting"; 
wineTastingCourse.date = ""; 
wineTastingCourse.school = "Somelier Somelier";
wineTastingCourse.studentCount = 16500;

var farmingCourse 				= {};
farmingCourse.title = "Farm like a pro"; 
farmingCourse.image = courseRoot+"03_codingCourse/course_pic.jpg"; 
farmingCourse.category = "farming"; 
farmingCourse.categoryLink = "../15_course/course_search.html?category=farming"; 
farmingCourse.date = ""; 
farmingCourse.school = "Farm Lackeys";
farmingCourse.studentCount = 3000;

var designCourse 				= {};
designCourse.title = "Design for '23"; 
designCourse.image = courseRoot+"03_codingCourse/course_pic.jpg"; 
designCourse.category = "design"; 
designCourse.categoryLink = "../15_course/course_search.html?category=design"; 
designCourse.date = ""; 
designCourse.school = "Uber Design";
designCourse.studentCount = 150;


var photographyCourse 				= {};
photographyCourse.title = "Angles for the Pro"; 
photographyCourse.image = courseRoot+"03_codingCourse/course_pic.jpg"; 
photographyCourse.category = "photography"; 
photographyCourse.categoryLink = "../15_course/course_search.html?category=photography"; 
photographyCourse.date = ""; 
photographyCourse.school = "Photo Pros";
photographyCourse.studentCount = 3000;

var projectManagementCourse 				= {};
projectManagementCourse.title = "Project Management Essentials"; 
projectManagementCourse.image = courseRoot+"03_codingCourse/course_pic.jpg"; 
projectManagementCourse.category = "project_management"; 
projectManagementCourse.categoryLink = "../15_course/course_search.html?category=project_management"; 
projectManagementCourse.date = ""; 
projectManagementCourse.school = "Allied Project Management School";
projectManagementCourse.studentCount = 1500;


const promoCourses = [cookeryCourse, nftCourse, codingCourse]; // campus

const previewCourses = [farmingCourse, wineTastingCourse, poloCourse, dressMakingCourse]; // candidate dashboard
const topCourses = [cookeryCourse, wineTastingCourse,  nftCourse, poloCourse]; // candidate dashboard 
const sponseredStudentShipCourses = [projectManagementCourse, photographyCourse, farmingCourse, designCourse]; // candidate dashboard
const courseDirectory = [cookeryCourse, nftCourse, codingCourse, poloCourse, dressMakingCourse, wineTastingCourse, farmingCourse, designCourse, photographyCourse, projectManagementCourse ];