import { MenuProps } from "antd";
import {
  ProfileOutlined,
  TableOutlined,
  AppstoreAddOutlined,
  ScheduleOutlined,
  ThunderboltOutlined,
  CreditCardOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { USER_ROLE } from "./role";
const SideBarItems = (role: string) => {
  const defaulSidebarItmes: MenuProps["items"] = [
    {
      label: "Profile",
      key: "profile",
      icon: <ProfileOutlined />,
      children: [
        {
          label: <Link href={`/${role}`}>Account Profile</Link>,
          key: `/${role}`,
        },
        {
          label: <Link href={`/${role}/change-password`}>Change Password</Link>,
          key: `/${role}/change-password`,
        },
      ],
    },
  ];
  const CommonSideBarItems: MenuProps["items"] = [
    {
      label: <Link href={`/${role}/manage-student`}>Manage Student</Link>,
      icon: <TableOutlined />,
      key: `/${role}/manage-student`,
    },
    {
      label: <Link href={`/${role}/manage-faculty`}>Manage Faculty</Link>,
      icon: <TableOutlined />,
      key: `/${role}/manage-faculty`,
    },
  ];
  const AdminSideBarItems: MenuProps["items"] = [
    ...defaulSidebarItmes,
    ...CommonSideBarItems,
    {
      label: "Manage Academi",
      key: "manage-academi",
      icon: <TableOutlined />,
      children: [
        {
          label: <Link href={`/${role}/academic-faculty`}>Faculties</Link>,
          key: `/${role}/academic-faculty`,
        },
        {
          label: <Link href={`/${role}/academic-department`}>Departments</Link>,
          key: `/${role}/academic-department`,
        },
        {
          label: <Link href={`/${role}/academic-semester`}>Semesters</Link>,
          key: `/${role}/academic-semester`,
        },
      ],
    },
    {
      label: "Management",
      key: "management",
      icon: <AppstoreAddOutlined />,
      children: [
        {
          label: <Link href={`/${role}/department`}>Department</Link>,
          key: `/${role}/department`,
        },
        {
          label: <Link href={`/${role}/building`}>Building</Link>,
          key: `/${role}/building`,
        },
        {
          label: <Link href={`/${role}/room`}>Romms</Link>,
          key: `/${role}/romms`,
        },
        {
          label: <Link href={`/${role}/course`}>Courses</Link>,
          key: `/${role}/courses`,
        },
        {
          label: (
            <Link href={`/${role}/semester-registration`}>
              Semester Registration
            </Link>
          ),
          key: `/${role}/semester-ragistration`,
        },
        {
          label: <Link href={`/${role}/offered-courses`}>Offered Courses</Link>,
          key: `/${role}/offered-courses`,
        },
        {
          label: (
            <Link href={`/${role}/offered-course-section`}>
              Offered Section
            </Link>
          ),
          key: `/${role}/offered-course-section`,
        },
        {
          label: (
            <Link href={`/${role}/offered-course-schedule`}>
              Course Schedules
            </Link>
          ),
          key: `/${role}/offered-course-schedule`,
        },
      ],
    },
  ];
  const SuperAdminSideBarItems: MenuProps["items"] = [
    ...defaulSidebarItmes,
    ...CommonSideBarItems,
    {
      label: <Link href={`/${role}/admin`}>Manage Admin</Link>,
      key: `/${role}/admin`,
      icon: <TableOutlined />,
    },
    {
      label: <Link href={`/${role}/user`}>Manage User</Link>,
      key: `/${role}/user`,
      icon: <TableOutlined />,
    },
    {
      label: "Management",
      key: "managment",
      icon: <AppstoreAddOutlined />,
      children: [
        {
          label: <Link href={`/${role}/department`}>Department</Link>,
          key: `/${role}/department`,
        },
      ],
    },
  ];
  const FacultySideBarItems: MenuProps["items"] = [
    ...defaulSidebarItmes,
    {
      label: <Link href={`/${role}/courses`}>Courses</Link>,
      key: `/${role}/courses`,
      icon: <TableOutlined />,
    },
  ];
  const StudentSideBarItems: MenuProps["items"] = [
    ...defaulSidebarItmes,
    {
      label: <Link href={`/${role}/courses`}>Courses</Link>,
      key: `/${role}/courses`,
      icon: <TableOutlined />,
    },
    {
      label: <Link href={`/${role}/registration`}>Registration</Link>,
      icon: <ThunderboltOutlined />,
      key: `/${role}/ragistration`,
    },
    {
      label: (
        <Link href={`/${role}/offered-course-schedule`}>Offered Schedule</Link>
      ),
      icon: <ScheduleOutlined />,
      key: `/${role}/offered-course-schedule`,
    },
    {
      label: <Link href={`/${role}/payment`}>Payment</Link>,
      icon: <CreditCardOutlined />,
      key: `/${role}/payment`,
    },
    {
      label: <Link href={`/${role}/academic-report`}>Academic Report</Link>,
      icon: <FileTextOutlined />,
      key: `/${role}/academic-report`,
    },
  ];
  if (role === USER_ROLE.SUPER_ADMIN) {
    return SuperAdminSideBarItems;
  } else if (role === USER_ROLE.ADMIN) {
    return AdminSideBarItems;
  } else if (role === USER_ROLE.FACULTY) {
    return FacultySideBarItems;
  } else if (role === USER_ROLE.STUDENT) {
    return StudentSideBarItems;
  } else {
    return defaulSidebarItmes;
  }
};

export default SideBarItems;
