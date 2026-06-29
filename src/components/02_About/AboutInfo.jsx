import { Award, FileBadge, Users, Sparkles } from 'lucide-react';

export const education = [
    {name: "Munster Technological University", qualification: "BSc Computing with Software Development", fromDate: "2024", toDate: "2028"},
    {name: "Killorglin Community College", qualification: "Leaving Certificate", fromDate: "2016", toDate: "2022"},
];

export const experience = [
    {role: "Summer Intern", company: "Fexco", fromDate: "May 2025", toDate: "Sep 2025"},
    {role: "Customer Service Representitive", company: "Fexco", fromDate: "Jul 2022", toDate: "Sep 2024"},
];

export const certification = [
    {certification: "EDGE Gold Award", organisation: "Munster Technological University", issueDate: "Apr 2026", credential: "https://my.potential.ly/folio/badge/bC5aH5IhLUAPsNus", icon: <Award aria-hidden = "true" />},
    {certification: "Peer Mentoring", organisation: "Munster Technological University", issueDate: "Apr 2026", credential: "https://www.linkedin.com/in/daniel-courtney-7b9255331/details/certifications/", icon: <Users aria-hidden = "true" />},
    {certification: "MTU Joint Mentorship Programme", organisation: "Munster Technological University", issueDate: "Apr 2026", credential: "https://www.linkedin.com/in/daniel-courtney-7b9255331/details/certifications/", icon: <FileBadge aria-hidden = "true" />},
    {certification: "Introduction to generative AI", organisation: "Microsoft", issueDate: "Apr 2026", credential:"https://learn.microsoft.com/en-gb/users/danielcourtney-2122/achievements/82uh5cpw?ref=https%3A%2F%2Fwww.linkedin.com%2F", icon: <Sparkles aria-hidden = "true" />},
    {certification: "EDGE Silver Award", organisation: "Munster Technological University", issueDate: "Sep 2025", credential: "https://my.potential.ly/folio/badge/ffUsqr5rAr4y4eth", icon: <Award aria-hidden = "true" />},
    {certification: "EDGE Bronze Award", organisation: "Munster Technological University", issueDate: "Feb 2025", credential: "https://my.potential.ly/folio/badge/ihBHwVy4ph3K4Cwj", icon: <Award aria-hidden = "true" />},
];