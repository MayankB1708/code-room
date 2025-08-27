# CodeRoom

CodeRoom is a full-stack, real-time coding interview platform that facilitates technical interviews with features like live video calls, screen sharing, code execution, and structured evaluations. This comprehensive platform streamlines the technical interview process by providing all necessary tools in one integrated environment.

## 🚀 Features

- **Real-time Video Communication**: Video calling and screen sharing through Stream API
- **Screen Recording**: Capture interview sessions for later review
- **Authentication & Authorization**: Secure user management via Clerk
- **Code Editor**: Monaco-based editor with syntax highlighting and multi-language support
- **Real-time Code Execution**: Run code using Judge0 API with instant feedback
- **Interview Management**: Schedule, conduct, and evaluate technical interviews
- **Dashboard**: Review past interviews, add comments, and rate candidate performance
- **Role-based Access**: Different interfaces for candidates and interviewers

## 📋 Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS, shadcn/ui
- **Authentication**: Clerk
- **Backend/Database**: Convex
- **Real-time Communication**: Stream (WebRTC)
- **Code Execution**: Judge0 API
- **Code Editor**: Monaco Editor

## 📐 Architecture Diagrams

### ER Diagram

```mermaid
erDiagram
    User {
        string id PK
        string clerkId
        string name
        string email
        string imageUrl
        enum role
        timestamp createdAt
        timestamp updatedAt
    }
    
    Meeting {
        string id PK
        string title
        string hostId FK
        string[] participantIds
        timestamp scheduledTime
        timestamp startedAt
        timestamp endedAt
        string status
        string recordingUrl
    }
    
    Question {
        string id PK
        string title
        string description
        string difficulty
        string[] tags
        string starterCode
        string solutionCode
        string[] examples
        string constraints
    }
    
    CodeSubmission {
        string id PK
        string meetingId FK
        string userId FK
        string questionId FK
        string code
        string language
        string status
        string output
        timestamp submittedAt
    }
    
    Feedback {
        string id PK
        string meetingId FK
        string interviewerId FK
        string candidateId FK
        number rating
        string comments
        string result
        timestamp createdAt
    }
    
    User ||--o{ Meeting : "hosts"
    User }|--o{ Meeting : "participates"
    Meeting ||--o{ CodeSubmission : "contains"
    Question ||--o{ CodeSubmission : "used in"
    Meeting ||--o{ Feedback : "receives"
    User ||--o{ Feedback : "gives"
    User ||--o{ Feedback : "receives"
```

### System Flow Diagram

```mermaid
flowchart TD
    A[User] --> B{Authentication via Clerk}
    B -->|Authenticated| C[Role Check]
    C -->|Interviewer| D[Interviewer Dashboard]
    C -->|Candidate| E[Candidate Dashboard]
    
    D --> F[Create/Schedule Interview]
    D --> G[Join Existing Interview]
    D --> H[View Past Interviews]
    
    E --> I[Join Scheduled Interview]
    E --> J[View Interview History]
    
    F --> K[Meeting Room]
    G --> K
    I --> K
    
    K --> L[Video Call via Stream]
    K --> M[Code Editor]
    K --> N[Screen Sharing]
    K --> O[Screen Recording]
    
    M --> P[Code Execution via Judge0]
    P --> Q[View Results]
    
    K --> R[End Interview]
    R --> S[Submit Feedback]
    R --> T[Store Recording]
    
    H --> U[View Recordings]
    H --> V[View/Edit Feedback]
    
    J --> W[View Feedback]
```

### Authentication Flow

```mermaid
sequenceDiagram
    participant User
    participant Clerk
    participant Convex
    participant App
    
    User->>App: Visits site
    App->>Clerk: Check authentication
    Clerk-->>App: Not authenticated
    App->>User: Show login/signup
    User->>Clerk: Sign up/Login
    Clerk->>User: Authenticate user
    Clerk->>Convex: Send webhook (user data)
    Convex->>Convex: Verify webhook from Clerk
    Convex->>Convex: Store/update user data
    Clerk-->>App: Auth token & user info
    App->>Convex: Query user role
    Convex-->>App: Return user role
    App->>User: Show role-specific dashboard
```

### Interview Session Flow

```mermaid
sequenceDiagram
    participant Interviewer
    participant Candidate
    participant Stream
    participant Monaco
    participant Judge0
    participant Convex
    
    Interviewer->>Convex: Schedule interview
    Convex-->>Interviewer: Confirm scheduling
    Convex-->>Candidate: Notify about interview
    
    Interviewer->>Stream: Create meeting room
    Stream-->>Interviewer: Room created
    Candidate->>Stream: Join meeting room
    
    Stream->>Stream: Establish WebRTC connection
    Stream-->>Interviewer: Candidate joined
    Stream-->>Candidate: Connected to Interviewer
    
    Interviewer->>Monaco: Select coding question
    Monaco-->>Candidate: Display question & starter code
    
    Candidate->>Monaco: Write/edit code
    Candidate->>Judge0: Submit code for execution
    Judge0-->>Candidate: Return execution results
    Judge0-->>Interviewer: Share execution results
    
    Interviewer->>Stream: Enable screen sharing/recording
    
    Interviewer->>Stream: End meeting
    Stream->>Convex: Store recording URL
    
    Interviewer->>Convex: Submit feedback & rating
    Convex-->>Interviewer: Confirm submission
    Convex-->>Candidate: Notify feedback available
```

### UML Class Diagram

```mermaid
classDiagram
    class User {
        +string id
        +string clerkId
        +string name
        +string email
        +string imageUrl
        +Role role
        +Date createdAt
        +Date updatedAt
    }
    
    class Meeting {
        +string id
        +string title
        +string hostId
        +string[] participantIds
        +Date scheduledTime
        +Date startedAt
        +Date endedAt
        +MeetingStatus status
        +string recordingUrl
        +createMeeting()
        +joinMeeting()
        +endMeeting()
        +startRecording()
        +stopRecording()
    }
    
    class CodeEditor {
        +string language
        +string code
        +string questionId
        +setLanguage()
        +updateCode()
        +getStarterCode()
        +executeCode()
    }
    
    class Question {
        +string id
        +string title
        +string description
        +string difficulty
        +string[] tags
        +string starterCode
        +string[] examples
        +string constraints
        +getQuestionDetails()
    }
    
    class Feedback {
        +string id
        +string meetingId
        +string interviewerId
        +string candidateId
        +number rating
        +string comments
        +string result
        +Date createdAt
        +submitFeedback()
        +updateFeedback()
    }
    
    class CodeSubmission {
        +string id
        +string meetingId
        +string userId
        +string questionId
        +string code
        +string language
        +string status
        +string output
        +Date submittedAt
        +submitCode()
        +getResults()
    }
    
    User "1" -- "many" Meeting : hosts
    User "many" -- "many" Meeting : participates
    Meeting "1" -- "many" CodeSubmission : has
    Question "1" -- "many" CodeSubmission : used in
    Meeting "1" -- "many" Feedback : receives
    User "1" -- "many" Feedback : gives
    User "1" -- "many" Feedback : receives
```

## 🔄 Complete Workflow

### 1. User Registration & Authentication

1. A new user visits the platform and signs up using Clerk authentication
2. Clerk handles the authentication process and sends a webhook to Convex
3. Convex verifies the webhook origin and stores the new user's information
4. The user is assigned a role (candidate or interviewer)
5. Based on the role, the user is directed to the appropriate dashboard

### 2. Interview Scheduling (Interviewer Flow)

1. An interviewer logs into their dashboard
2. They access the scheduling page to create a new interview
3. They select a candidate, date, time, and optionally other interviewers
4. The system creates a meeting record in Convex
5. The candidate receives a notification about the scheduled interview

### 3. Meeting Creation & Joining

1. At the scheduled time, the interviewer initiates the meeting room via Stream API
2. The system generates a unique meeting link
3. The candidate joins using the provided link
4. Stream handles the WebRTC connection for video/audio communication
5. The host (interviewer) has additional controls like ending the meeting for all

### 4. Code Interview Process

1. The interviewer selects a coding question from the available library
2. The Monaco editor loads with the appropriate starter code for the selected question
3. The candidate can see the question description, examples, and constraints
4. The candidate writes/edits code in the editor
5. The code can be executed using the Judge0 API
6. Execution results are displayed in real-time to both parties
7. The interviewer can observe the candidate's coding process and problem-solving approach
8. Screen sharing is available for additional explanations or demonstrations

### 5. Interview Recording & Evaluation

1. The interviewer can record the session using Stream's recording feature
2. When the interview ends, the recording URL is stored in Convex
3. The interviewer submits feedback, including:
   - Rating (1-10 scale)
   - Comments about the candidate's performance
   - Pass/Fail decision
4. This feedback is stored in Convex linked to the specific interview session

### 6. Post-Interview Review

1. Interviewers can access past interviews from their dashboard
2. They can view recordings, review code submissions, and edit feedback
3. Candidates can view their interview history and feedback
4. The platform maintains a comprehensive history of all interviews and evaluations

This workflow creates a complete cycle from scheduling to evaluation, providing a seamless experience for both interviewers and candidates while maintaining detailed records of all interactions.
