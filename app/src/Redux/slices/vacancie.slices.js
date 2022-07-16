import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    vacancies: [
        { 
            "id" : 1,
            "companyId" : 2,
            "workName" : "Freelance React Developer",
            "workPosition" : "React DEVELOPER",
            "city" : "Erevan",
            "country" : "Armenia",
            "typeOfWork" : "Junyor",
            "createDay" : "24/07/22",
            "WorkConditions" : "Permanent",
            "workCategory" : "programming",
            "WorkHours" : "12 hour",
            "desc" : "Are you GAME to JUMP INTO MAGENTA and be our new DevOps Engineer?",
            "jobDuties" : "Select and deploy appropriate CI/CD tools Set up new tools and required infrastructure Provision, secure and own infrastructure using Docker, Kubernetes and service meshes. Monitor the infrastructure and respond to security incidents and alerts. Encourage and build automated processes",
            "necessarySkills" : "BS or MS in Computer Science or related field; 2+ years of experience in deploying and managing medium/large scale distributed systems; Experience in Linux and Windows-based infrastructure; Knowledge in modern configuration management tools (Ansible, Terraform, Packer, SaltStack); Experience in setting up CI/CD pipelines(TeamCity/TFS/GitLab/Octopus…) Scripting experience: (PowerShell/Bash/Python/Ruby…) Experience with cloud infrastructure (Azure/GCP…) Experience using container technologies (Docker, Kubernetes, Elixir) Passionate about learning and adopting new technologies that will ease your day-to-day job; Is magenta your favorite color? Are you a team player?",
        },
        { 
            "id" : 2,
            "companyId" : 1,
            "workName" : "Freelance Devops Developer",
            "workPosition" : "DEVOPS DEVELOPER",
            "city" : "Erevan",
            "country" : "Armenia",
            "typeOfWork" : "Junyor",
            "createDay" : "24/07/22",
            "WorkConditions" : "Permanent",
            "workCategory" : "programming",
            "WorkHours" : "12 hour",
            "desc" : "Are you GAME to JUMP INTO MAGENTA and be our new DevOps Engineer?",
            "jobDuties" : "Select and deploy appropriate CI/CD tools Set up new tools and required infrastructure Provision, secure and own infrastructure using Docker, Kubernetes and service meshes. Monitor the infrastructure and respond to security incidents and alerts. Encourage and build automated processes",
            "necessarySkills" : "BS or MS in Computer Science or related field; 2+ years of experience in deploying and managing medium/large scale distributed systems; Experience in Linux and Windows-based infrastructure; Knowledge in modern configuration management tools (Ansible, Terraform, Packer, SaltStack); Experience in setting up CI/CD pipelines(TeamCity/TFS/GitLab/Octopus…) Scripting experience: (PowerShell/Bash/Python/Ruby…) Experience with cloud infrastructure (Azure/GCP…) Experience using container technologies (Docker, Kubernetes, Elixir) Passionate about learning and adopting new technologies that will ease your day-to-day job; Is magenta your favorite color? Are you a team player?",
        },
        { 
            "id" : 3,
            "companyId" : 3,
            "workName" : "Web Developer",
            "workPosition" : "senyor web DEVELOPER",
            "city" : "Erevan",
            "country" : "Armenia",
            "typeOfWork" : "Junyor",
            "createDay" : "24/07/22",
            "WorkConditions" : "Permanent",
            "workCategory" : "programming",
            "WorkHours" : "12 hour",
            "desc" : "Are you GAME to JUMP INTO MAGENTA and be our new DevOps Engineer?",
            "jobDuties" : "Select and deploy appropriate CI/CD tools Set up new tools and required infrastructure Provision, secure and own infrastructure using Docker, Kubernetes and service meshes. Monitor the infrastructure and respond to security incidents and alerts. Encourage and build automated processes",
            "necessarySkills" : "BS or MS in Computer Science or related field; 2+ years of experience in deploying and managing medium/large scale distributed systems; Experience in Linux and Windows-based infrastructure; Knowledge in modern configuration management tools (Ansible, Terraform, Packer, SaltStack); Experience in setting up CI/CD pipelines(TeamCity/TFS/GitLab/Octopus…) Scripting experience: (PowerShell/Bash/Python/Ruby…) Experience with cloud infrastructure (Azure/GCP…) Experience using container technologies (Docker, Kubernetes, Elixir) Passionate about learning and adopting new technologies that will ease your day-to-day job; Is magenta your favorite color? Are you a team player?",
        },
        { 
            "id" : 4,
            "companyId" : 1,
            "workName" : "Freelance React Developer",
            "workPosition" : "DEVOPS DEVELOPER",
            "city" : "Erevan",
            "country" : "Armenia",
            "typeOfWork" : "Junyor",
            "createDay" : "24/07/22",
            "WorkConditions" : "Permanent",
            "workCategory" : "programming",
            "WorkHours" : "12 hour",
            "desc" : "Are you GAME to JUMP INTO MAGENTA and be our new DevOps Engineer?",
            "jobDuties" : "Select and deploy appropriate CI/CD tools Set up new tools and required infrastructure Provision, secure and own infrastructure using Docker, Kubernetes and service meshes. Monitor the infrastructure and respond to security incidents and alerts. Encourage and build automated processes",
            "necessarySkills" : "BS or MS in Computer Science or related field; 2+ years of experience in deploying and managing medium/large scale distributed systems; Experience in Linux and Windows-based infrastructure; Knowledge in modern configuration management tools (Ansible, Terraform, Packer, SaltStack); Experience in setting up CI/CD pipelines(TeamCity/TFS/GitLab/Octopus…) Scripting experience: (PowerShell/Bash/Python/Ruby…) Experience with cloud infrastructure (Azure/GCP…) Experience using container technologies (Docker, Kubernetes, Elixir) Passionate about learning and adopting new technologies that will ease your day-to-day job; Is magenta your favorite color? Are you a team player?",
        },
        { 
            "id" : 5,
            "companyId" : 3,
            "workName" : "Freelance React Developer",
            "workPosition" : "DEVOPS DEVELOPER",
            "city" : "Erevan",
            "country" : "Armenia",
            "typeOfWork" : "Junyor",
            "createDay" : "24/07/22",
            "WorkConditions" : "Permanent",
            "workCategory" : "programming",
            "WorkHours" : "12 hour",
            "desc" : "Are you GAME to JUMP INTO MAGENTA and be our new DevOps Engineer?",
            "jobDuties" : "Select and deploy appropriate CI/CD tools Set up new tools and required infrastructure Provision, secure and own infrastructure using Docker, Kubernetes and service meshes. Monitor the infrastructure and respond to security incidents and alerts. Encourage and build automated processes",
            "necessarySkills" : "BS or MS in Computer Science or related field; 2+ years of experience in deploying and managing medium/large scale distributed systems; Experience in Linux and Windows-based infrastructure; Knowledge in modern configuration management tools (Ansible, Terraform, Packer, SaltStack); Experience in setting up CI/CD pipelines(TeamCity/TFS/GitLab/Octopus…) Scripting experience: (PowerShell/Bash/Python/Ruby…) Experience with cloud infrastructure (Azure/GCP…) Experience using container technologies (Docker, Kubernetes, Elixir) Passionate about learning and adopting new technologies that will ease your day-to-day job; Is magenta your favorite color? Are you a team player?",
        }
    ]
}

const vacancieSlice = createSlice({
    name: 'vacancieSlice',
    initialState,
    reducers: {
        addPlayer(state,action){
            state.data = [
                ...state.data,
                {
                    id: action.payload.id,
                    firstName: action.payload.firstName,
                    lastName : action.payload.lastName,
                    createdAt : action.payload.createdAt,
                    teamName : action.payload.teamName
                }
            ]
        },
    },
})

export const { addPlayer} = vacancieSlice.actions;
export default vacancieSlice.reducer;