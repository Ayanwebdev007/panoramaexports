
import NewsletterImg1 from "../assets/Media/Workshop/Img1.webp";
import NewsletterImg2 from "../assets/Media/Workshop/Img2.webp";
import NewsletterImg5 from "../assets/Media/Workshop/Img5.webp";
import NewsletterImg6 from "../assets/Media/Workshop/Img6.webp";
import NewsletterImg7 from "../assets/Media/Workshop/Img7.webp";
import NewsletterImg8 from "../assets/Media/Workshop/Img8.webp";
import NewsletterImg9 from "../assets/Media/Workshop/Img9.webp";
import NewsletterImg10 from "../assets/Media/Workshop/Img10.webp";

import Safety from "../assets/Media/Workshop/Safety.webp";
import Safety1 from "../assets/Media/Workshop/Safety1.webp";
import Safety2 from "../assets/Media/Workshop/Safety2.webp";
import Safety3 from "../assets/Media/Workshop/Safety3.webp";
import Safety4 from "../assets/Media/Workshop/Safety4.webp";
import Environment1 from "../assets/Media/Workshop/Environment1.webp";
import Environment2 from "../assets/Media/Workshop/Environment2.webp";
import Environment3 from "../assets/Media/Workshop/DSC03107.webp";
import Environment4 from "../assets/Media/Workshop/CM100651.webp";
import wd4 from "../assets/WD4.webp";
import wd5 from "../assets/WD-5.webp";
import Christmas1 from "../assets/Christmas1.webp";
import Christmas3 from "../assets/Christmas3.jpg";
import Christmas4 from "../assets/Christmas4.jpg";

// PDFs
import NewsletterJanFeb2026 from "../assets/Newsletter-Jan1.pdf";
import NewsletterMar2026 from "../assets/Mar 26.pdf";

export const mediaData = {
    Media: [
        {
            id: 1,
            title: "PANO Team Up Training Sessions",
            date: "December 2024",
            image: NewsletterImg1,
            images: [
                NewsletterImg1, NewsletterImg2, NewsletterImg5,
                NewsletterImg6, NewsletterImg7, NewsletterImg8, NewsletterImg9, NewsletterImg10
            ],
            count: 8
        },
        {
            id: 2,
            title: "Environment Day 2025",
            date: "June 5, 2025",
            image: Environment1,
            images: [Environment1, Environment2, Environment3],
            count: 3
        },
        {
            id: 5,
            title: "Christmas Day Celebration 2025",
            date: "December 25, 2025",
            image: Christmas1,
            images: [Christmas1, Christmas3, Christmas4, Environment4],
            count: 4
        },
        {
            id: 3,
            title: "Women's Day Celebration 2026",
            date: "March 8, 2026",
            image: wd4,
            images: [wd4, wd5],
            count: 2
        },
        {
            id: 4,
            title: "Safety Drills 2025",
            date: "February 2025",
            image: Safety1,
            images: [Safety1, Safety2, Safety3, Safety4, Safety],
            count: 5
        }
    ],
    Newsletter: [
        {
            id: 3,
            title: "Panorama Exports Newsletter",
            date: "Jan-Feb 2026",
            month: "Jan-Feb",
            year: "2026",
            url: NewsletterJanFeb2026,
        },
        {
            id: 4,
            title: "Panorama Exports Newsletter",
            date: "March 2026",
            month: "March",
            year: "2026",
            url: NewsletterMar2026,
        },
        {
            id: 1,
            title: "Panorama Exports Newsletter",
            date: "November 2025",
            month: "November",
            year: "2025",
            url: "/media/November2025.pdf",
        },
        {
            id: 2,
            title: "Christmas Newsletter",
            date: "December 2025",
            month: "December",
            year: "2025",
            url: "/media/Christmas Newletter.pdf",
        },
    ],
    News: []
};
