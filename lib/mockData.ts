export const currentStudent = {
  id: "jordan-bennett",
  name: "Jordan Bennett",
  email: "test@gmail.com",
  program: "NEKLS Completion Program",
  progressPercent: 92,
  completedAssignments: 23,
  subjects: ["History", "Math", "Science", "Social Studies"],
  advisor: "Ms. Rachel Kim",
  expectedCompletion: "May 2026",
  remainingAssignments: 4,
}

export const dashboardNextSteps = [
  {
    title: "Finish Final Science Reflection",
    dueDate: "2026-05-14",
    subject: "Science",
    note: "Use your lab notes to explain what changed in your thinking.",
  },
  {
    title: "Complete Social Studies Wrap-Up",
    dueDate: "2026-05-16",
    subject: "Social Studies",
    note: "Submit the final civics reflection and presentation notes.",
  },
]

export const subjectProgress = [
  {
    subject: "History",
    description:
      "Primary sources, local history, and final reflection work are nearly complete.",
    status: "Final review",
    progressPercent: 96,
    completedAssignments: 6,
    remainingAssignments: 1,
    nextMilestone: "Final reflection packet",
  },
  {
    subject: "Math",
    description:
      "A focused finish on unit mastery checks, practical math, and graphing skills.",
    status: "In progress",
    progressPercent: 88,
    completedAssignments: 5,
    remainingAssignments: 2,
    nextMilestone: "Unit 8 mastery check",
  },
  {
    subject: "Science",
    description:
      "Lab thinking, data practice, and science writing are in the last stretch.",
    status: "Reflection due",
    progressPercent: 94,
    completedAssignments: 6,
    remainingAssignments: 1,
    nextMilestone: "Lab summary review",
  },
  {
    subject: "Social Studies",
    description:
      "Civics, community connections, and wrap-up work for final completion.",
    status: "Wrap-up due",
    progressPercent: 91,
    completedAssignments: 6,
    remainingAssignments: 1,
    nextMilestone: "Civics presentation upload",
  },
]

export const completedAssignments = [
  "History source analysis portfolio",
  "History timeline project",
  "History research reflection",
  "History document-based question set",
  "History community history notes",
  "History mid-program review",
  "Math foundations benchmark",
  "Math fractions and ratios packet",
  "Math algebra readiness check",
  "Math graphing mini-project",
  "Math financial literacy set",
  "Science lab safety module",
  "Science ecosystems reading check",
  "Science energy transfer notes",
  "Science lab observation journal",
  "Science data table practice",
  "Science claims evidence reasoning set",
  "Social Studies map skills module",
  "Social Studies government basics review",
  "Social Studies current events journal",
  "Social Studies citizenship reflection",
  "Social Studies community interview",
  "Social Studies economics basics check",
]

export const nextSteps = [
  {
    title: "Finish Math Unit 8",
    dueDate: "2026-05-12",
    owner: "Jordan Bennett",
    priority: "High",
  },
  {
    title: "Upload Science lab summary",
    dueDate: "2026-05-14",
    owner: "Jordan Bennett",
    priority: "Medium",
  },
  {
    title: "Meet with advisor for completion review",
    dueDate: "2026-05-17",
    owner: "Ms. Rachel Kim",
    priority: "High",
  },
]

export const completionRequirements = [
  {
    requirement: "Complete all core subject assignments",
    status: "Almost complete",
    progressPercent: 92,
  },
  {
    requirement: "Submit final reflection",
    status: "Not started",
    progressPercent: 0,
  },
  {
    requirement: "Advisor completion meeting",
    status: "Scheduled",
    progressPercent: 50,
  },
  {
    requirement: "Administrator review",
    status: "Waiting on final work",
    progressPercent: 25,
  },
]

export const completionChecklist = [
  {
    item: "History major assignments",
    status: "Complete",
    complete: true,
  },
  {
    item: "Math mastery checks",
    status: "2 short checks remaining",
    complete: false,
  },
  {
    item: "Science final reflection",
    status: "Ready to finish",
    complete: false,
  },
  {
    item: "Social Studies wrap-up",
    status: "In progress",
    complete: false,
  },
  {
    item: "Advisor completion meeting",
    status: "Scheduled",
    complete: false,
  },
  {
    item: "Teacher sign-off",
    status: "Pending final review",
    complete: false,
  },
]

export const calendarEvents = [
  {
    title: "Math support block",
    date: "2026-05-08",
    time: "10:00 AM",
    type: "Support",
  },
  {
    title: "Science lab summary due",
    date: "2026-05-14",
    time: "3:00 PM",
    type: "Due date",
  },
  {
    title: "Advisor check-in",
    date: "2026-05-19",
    time: "1:30 PM",
    type: "Meeting",
  },
  {
    title: "Social Studies wrap-up due",
    date: "2026-05-16",
    time: "2:00 PM",
    type: "Due date",
  },
  {
    title: "Completion review meeting",
    date: "2026-05-28",
    time: "11:00 AM",
    type: "Meeting",
  },
]

export const schoolClosures = [
  {
    title: "Teacher planning block",
    date: "2026-05-13",
    note: "Independent portal work is available.",
  },
  {
    title: "Regional staff training",
    date: "2026-05-22",
    note: "Messages will be answered the next school day.",
  },
  {
    title: "Memorial Day",
    date: "2026-05-25",
    note: "Portal remains available for independent work.",
  },
  {
    title: "Records review",
    date: "2026-05-27",
    note: "Final review appointments resume Thursday.",
  },
]

export const communications = [
  {
    from: "Ms. Rachel Kim",
    audience: "Jordan Bennett",
    subject: "You are close to completion",
    preview:
      "Great work this week. Please focus on Math Unit 8 and your Science lab summary next.",
    date: "2026-05-06",
    unread: true,
  },
  {
    from: "NEKLS Office",
    audience: "All students",
    subject: "May support schedule",
    preview:
      "Additional completion support blocks are available every Tuesday and Thursday.",
    date: "2026-05-03",
    unread: false,
  },
  {
    from: "Mr. Daniel Price",
    audience: "Jordan Bennett",
    subject: "Math Unit 8 checkpoint",
    preview:
      "Try the first two practice problems, then send me the step where you feel unsure.",
    date: "2026-05-05",
    unread: true,
  },
  {
    from: "Dr. Lena Moore",
    audience: "Jordan Bennett",
    subject: "Science reflection support",
    preview:
      "Your lab observations are strong. Focus the reflection on claim, evidence, and reasoning.",
    date: "2026-05-04",
    unread: false,
  },
]

export const aiSampleResponses = [
  {
    prompt: "Help me plan my final week.",
    response:
      "Start with Math Unit 8, then complete the Science lab summary. Save your final reflection for after your advisor check-in.",
  },
  {
    prompt: "Explain claim, evidence, reasoning.",
    response:
      "A claim is your answer, evidence is the information that supports it, and reasoning explains why the evidence proves the claim.",
  },
]

export const adminMetrics = {
  activeStudents: 48,
  totalStudents: 52,
  nearCompletion: 9,
  needsCheckIn: 7,
  assignmentsCompletedThisWeek: 137,
  teacherMessagesSent: 64,
  reminderQueue: 12,
  averageProgressPercent: 76,
  aiTutoringQuestions: 84,
  commonHelpSubject: "Math",
}

export const students = [
  {
    id: "jordan-bennett",
    name: "Jordan Bennett",
    email: "test@gmail.com",
    program: "NEKLS Completion Program",
    progressPercent: 92,
    status: "Near completion",
    advisor: "Ms. Rachel Kim",
    lastActive: "Today",
    assignedTeacher: "Ms. Rachel Kim",
    completedAssignments: 23,
    remainingRequirements: 4,
    needsCheckIn: false,
  },
  {
    id: "avery-collins",
    name: "Avery Collins",
    email: "avery.collins@example.com",
    program: "NEKLS Completion Program",
    progressPercent: 81,
    status: "On track",
    advisor: "Mr. Daniel Price",
    lastActive: "Yesterday",
    assignedTeacher: "Mr. Daniel Price",
    completedAssignments: 19,
    remainingRequirements: 6,
    needsCheckIn: false,
  },
  {
    id: "sam-rivera",
    name: "Sam Rivera",
    email: "sam.rivera@example.com",
    program: "NEKLS Completion Program",
    progressPercent: 68,
    status: "Needs support",
    advisor: "Ms. Rachel Kim",
    lastActive: "4 days ago",
    assignedTeacher: "Ms. Rachel Kim",
    completedAssignments: 15,
    remainingRequirements: 9,
    needsCheckIn: true,
  },
  {
    id: "maya-thompson",
    name: "Maya Thompson",
    email: "maya.thompson@example.com",
    program: "NEKLS Completion Program",
    progressPercent: 74,
    status: "On track",
    advisor: "Dr. Lena Moore",
    lastActive: "Today",
    assignedTeacher: "Dr. Lena Moore",
    completedAssignments: 17,
    remainingRequirements: 7,
    needsCheckIn: false,
  },
  {
    id: "eli-watson",
    name: "Eli Watson",
    email: "eli.watson@example.com",
    program: "NEKLS Completion Program",
    progressPercent: 57,
    status: "Needs check-in",
    advisor: "Mr. Daniel Price",
    lastActive: "6 days ago",
    assignedTeacher: "Mr. Daniel Price",
    completedAssignments: 12,
    remainingRequirements: 12,
    needsCheckIn: true,
  },
  {
    id: "nora-patel",
    name: "Nora Patel",
    email: "nora.patel@example.com",
    program: "NEKLS Completion Program",
    progressPercent: 89,
    status: "Near completion",
    advisor: "Dr. Lena Moore",
    lastActive: "2 days ago",
    assignedTeacher: "Dr. Lena Moore",
    completedAssignments: 21,
    remainingRequirements: 3,
    needsCheckIn: true,
  },
]

export const teachers = [
  {
    id: "rachel-kim",
    name: "Ms. Rachel Kim",
    subject: "Student Advisor",
    activeStudents: 18,
    email: "rachel.kim@nekls.example",
    studentsNeedingCheckIn: 2,
    statusSummary: "Strong completion momentum across near-finish students.",
  },
  {
    id: "daniel-price",
    name: "Mr. Daniel Price",
    subject: "Math",
    activeStudents: 16,
    email: "daniel.price@nekls.example",
    studentsNeedingCheckIn: 3,
    statusSummary: "Math support is the highest follow-up area this week.",
  },
  {
    id: "lena-moore",
    name: "Dr. Lena Moore",
    subject: "Science",
    activeStudents: 14,
    email: "lena.moore@nekls.example",
    studentsNeedingCheckIn: 2,
    statusSummary: "Science reflections are moving steadily toward review.",
  },
]

export const reminders = [
  {
    title: "Send completion review reminders",
    audience: "Near-completion students",
    dueDate: "2026-05-09",
    status: "Ready",
  },
  {
    title: "Follow up on missing Math checks",
    audience: "Students below 75% in Math",
    dueDate: "2026-05-10",
    status: "Draft",
  },
  {
    title: "Publish staff planning day note",
    audience: "All portal users",
    dueDate: "2026-05-22",
    status: "Scheduled",
  },
]

export const adminAnalytics = [
  {
    label: "Active students this week",
    value: "48",
    note: "92% of roster",
    progressPercent: 92,
  },
  {
    label: "Students near completion",
    value: "9",
    note: "Ready for final push",
    progressPercent: 78,
  },
  {
    label: "Students needing follow-up",
    value: "7",
    note: "Check-in recommended",
    progressPercent: 38,
  },
  {
    label: "Average completion rate",
    value: "76%",
    note: "Across active students",
    progressPercent: 76,
  },
  {
    label: "Most common subject needing help",
    value: "Math",
    note: "Unit checks and graphing",
    progressPercent: 64,
  },
  {
    label: "AI tutoring questions this week",
    value: "84",
    note: "Mock NEKLSAI summaries",
    progressPercent: 70,
  },
]

export const adminCommunications = [
  {
    type: "Student message",
    from: "Jordan Bennett",
    subject: "Question about Science reflection",
    preview:
      "Jordan asked for help connecting lab notes to the final claim-evidence-reasoning reflection.",
    timestamp: "Today, 9:20 AM",
    status: "Open",
  },
  {
    type: "Teacher note",
    from: "Ms. Rachel Kim",
    subject: "Near-completion review",
    preview:
      "Jordan is on track for final review after two remaining assignments are submitted.",
    timestamp: "Today, 8:45 AM",
    status: "Reviewed",
  },
  {
    type: "School notice",
    from: "NEKLS Office",
    subject: "Upcoming closure reminder",
    preview:
      "Regional staff training is scheduled for May 22. Portal access remains available.",
    timestamp: "Yesterday, 2:30 PM",
    status: "Scheduled",
  },
  {
    type: "NEKLSAI summary",
    from: "NEKLSAI",
    subject: "Math support pattern",
    preview:
      "Several students asked for help identifying first steps in multi-step math problems.",
    timestamp: "Yesterday, 11:15 AM",
    status: "Insight",
  },
]

export const adminReminders = [
  {
    student: "Sam Rivera",
    reason: "Student needs check-in",
    priority: "High",
    dueDate: "2026-05-08",
    suggestedAction: "Schedule advisor check-in",
  },
  {
    student: "Eli Watson",
    reason: "Student inactive for several days",
    priority: "High",
    dueDate: "2026-05-09",
    suggestedAction: "Send support message",
  },
  {
    student: "Jordan Bennett",
    reason: "Student is close to completion",
    priority: "Medium",
    dueDate: "2026-05-10",
    suggestedAction: "Confirm final review plan",
  },
  {
    student: "Nora Patel",
    reason: "Follow-up needed after missed appointment",
    priority: "Medium",
    dueDate: "2026-05-11",
    suggestedAction: "Reschedule completion meeting",
  },
  {
    student: "All students",
    reason: "Upcoming closure reminder",
    priority: "Low",
    dueDate: "2026-05-20",
    suggestedAction: "Publish closure notice",
  },
]

export const teacherNotes = [
  {
    teacher: "Ms. Rachel Kim",
    note: "Jordan responds well to short action lists and is ready for final review planning.",
    date: "2026-05-06",
  },
  {
    teacher: "Mr. Daniel Price",
    note: "Math Unit 8 needs one more guided check before sign-off.",
    date: "2026-05-05",
  },
  {
    teacher: "Dr. Lena Moore",
    note: "Science reflection should focus on evidence and reasoning, not adding new research.",
    date: "2026-05-04",
  },
]
