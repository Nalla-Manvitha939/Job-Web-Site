import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import { lazy, Suspense } from "react";

import ErrorBoundary from "./components/ErrorBoundary";
import ProtectedRoute from "./components/ProtectedRoute";

import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "./contexts/ThemeContext";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const NotFound = lazy(() => import("./pages/NotFound"));

const UserDashboard = lazy(() => import("./pages/user/Dashboard"));
const BrowseJobs = lazy(() => import("./pages/user/BrowseJobs"));
const JobDetails = lazy(() => import("./pages/user/JobDetails"));
const ApplyJob = lazy(() => import("./pages/user/ApplyJob"));
const MyApplications = lazy(() => import("./pages/user/MyApplications"));
const UserProfile = lazy(() => import("./pages/user/Profile"));
const SavedJobs = lazy(() => import("./pages/user/SavedJobs"));

const RecruiterDashboard = lazy(() => import("./pages/recruiter/Dashboard"));
const CompanyProfile = lazy(() => import("./pages/recruiter/CompanyProfile"));
const PostJob = lazy(() => import("./pages/recruiter/PostJob"));
const ManageJobs = lazy(() => import("./pages/recruiter/ManageJobs"));
const EditJob = lazy(() => import("./pages/recruiter/EditJob"));
const Applicants = lazy(() => import("./pages/recruiter/Applicants"));
const RecruiterJobDetails = lazy(() => import("./pages/recruiter/JobDetails"));

const AdminDashboard = lazy(() => import("./pages/admin/Dashboard"));
const AdminUsers = lazy(() => import("./pages/admin/Users"));
const AdminCompanies = lazy(() => import("./pages/admin/Companies"));
const AdminJobs = lazy(() => import("./pages/admin/Jobs"));
const AdminApplicants = lazy(() => import("./pages/admin/Applicants"));
const AdminReports = lazy(() => import("./pages/admin/Reports"));
const AdminAnalytics = lazy(() => import("./pages/admin/Analytics"));

function Router() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />

        <Route path="/user/dashboard">
          <ProtectedRoute allowedRoles={["user"]}>
            <UserDashboard />
          </ProtectedRoute>
        </Route>

        <Route path="/user/browse-jobs">
          <ProtectedRoute allowedRoles={["user"]}>
            <BrowseJobs />
          </ProtectedRoute>
        </Route>

        <Route path="/user/job/:id">
          <ProtectedRoute allowedRoles={["user"]}>
            <JobDetails />
          </ProtectedRoute>
        </Route>

        <Route path="/user/apply/:id">
          <ProtectedRoute allowedRoles={["user"]}>
            <ApplyJob />
          </ProtectedRoute>
        </Route>

        <Route path="/user/applications">
          <ProtectedRoute allowedRoles={["user"]}>
            <MyApplications />
          </ProtectedRoute>
        </Route>

        <Route path="/user/profile">
          <ProtectedRoute allowedRoles={["user"]}>
            <UserProfile />
          </ProtectedRoute>
        </Route>

        <Route path="/user/saved-jobs">
          <ProtectedRoute allowedRoles={["user"]}>
            <SavedJobs />
          </ProtectedRoute>
        </Route>

        <Route path="/recruiter/dashboard">
          <ProtectedRoute allowedRoles={["recruiter"]}>
            <RecruiterDashboard />
          </ProtectedRoute>
        </Route>

        <Route path="/recruiter/company-profile">
          <ProtectedRoute allowedRoles={["recruiter"]}>
            <CompanyProfile />
          </ProtectedRoute>
        </Route>

        <Route path="/recruiter/post-job">
          <ProtectedRoute allowedRoles={["recruiter"]}>
            <PostJob />
          </ProtectedRoute>
        </Route>

        <Route path="/recruiter/manage-jobs">
          <ProtectedRoute allowedRoles={["recruiter"]}>
            <ManageJobs />
          </ProtectedRoute>
        </Route>

        <Route path="/recruiter/job/:id">
          <ProtectedRoute allowedRoles={["recruiter"]}>
            <RecruiterJobDetails />
          </ProtectedRoute>
        </Route>

        <Route path="/recruiter/edit-job/:id">
          <ProtectedRoute allowedRoles={["recruiter"]}>
            <EditJob />
          </ProtectedRoute>
        </Route>

        <Route path="/recruiter/applicants">
          <ProtectedRoute allowedRoles={["recruiter"]}>
            <Applicants />
          </ProtectedRoute>
        </Route>

        <Route path="/admin/dashboard">
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminDashboard />
          </ProtectedRoute>
        </Route>

        <Route path="/admin/users">
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminUsers />
          </ProtectedRoute>
        </Route>

        <Route path="/admin/companies">
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminCompanies />
          </ProtectedRoute>
        </Route>

        <Route path="/admin/jobs">
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminJobs />
          </ProtectedRoute>
        </Route>

        <Route path="/admin/applicants">
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminApplicants />
          </ProtectedRoute>
        </Route>

        <Route path="/admin/reports">
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminReports />
          </ProtectedRoute>
        </Route>

        <Route path="/admin/analytics">
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminAnalytics />
          </ProtectedRoute>
        </Route>

        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </main>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <ThemeProvider defaultTheme="light" switchable>
          <TooltipProvider>
            <Toaster />
            <Suspense
              fallback={
                <div className="min-h-screen flex items-center justify-center">
                  Loading...
                </div>
              }
            >
              <Router />
            </Suspense>
          </TooltipProvider>
        </ThemeProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
