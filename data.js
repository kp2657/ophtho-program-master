// National data, rules, tracks, questions, recheck list. Per-program data is in programs.js (generated from the xlsx).
// Rule: only confirmed, current data is shown. Stale or undated values are blanked, not carried.
window.DATA = {
  "meta": {
    "built": "2026-11-08",
    "targetCycle": "2027-28 (applications Sept 2027, Match Jan 2028)",
    "observedCycle": "2026-27",
    "note": "2026-27 values are observed proxies for the 2027-28 cycle. Verify any program's deadline on its own page before relying on it.",
    "sources": [
      [
        "AUPO 2026-27 Ophthalmology Residency Match FAQs",
        "https://aupo-24-prod-backend.parallelpublicworks.com/media/459"
      ],
      [
        "AUPO 2026 Ophthalmology Residency Match Summary Report",
        "https://aupo-24-prod-backend.parallelpublicworks.com/media/469"
      ],
      [
        "OPDA Guide 2026-27 Ophthalmology (specialty guidance)",
        "https://cmss.org/wp-content/uploads/2026/07/OPDA-Guide_2026-2027_Ophthalmology.pdf"
      ],
      [
        "AUPO medical student resources",
        "https://aupo.org/medical-student-resources/"
      ],
      [
        "SF Match ophthalmology timetable",
        "https://www.sfmatch.org/specialty/ophthalmology-residency/Timetable"
      ],
      [
        "Master v3 spreadsheet ophth_master_v3_2026-10-24_Kcount.xlsx (ACGME ADS AY2026-27; program pages read Oct 2026; NIH RePORTER), narrowed to programs with a named MD/PhD graduate",
        ""
      ]
    ]
  },
  "calendar": [
    [
      "Applicant registration opens",
      "Jul 1, 2025",
      "Jul 1, 2026",
      "TBD (recheck late May-Jun 2027)"
    ],
    [
      "Applications released to programs",
      "Sep 2, 2025",
      "Sep 1, 2026",
      "TBD"
    ],
    [
      "MSPE released",
      "~Sep 25, 2025",
      "Sep 23, 2026",
      "TBD"
    ],
    [
      "Interview invitation release",
      "4 coordinated batches",
      "Oct 13 and Oct 20, 2026, 12:00 PT (24 h hold before accepting; programs set 48-120 h response windows)",
      "TBD"
    ],
    [
      "Interviews begin",
      "",
      "Oct 26, 2026 (all virtual)",
      "TBD"
    ],
    [
      "Interviews end",
      "",
      "Dec 19, 2026",
      "TBD"
    ],
    [
      "Program rank lists due",
      "",
      "Dec 21, 2026, 12:00 PT",
      "TBD"
    ],
    [
      "Optional live open houses",
      "",
      "Dec 28, 2026 - Jan 13, 2027",
      "TBD"
    ],
    [
      "Applicant rank lists due",
      "",
      "Jan 14, 2027, 12:00 PT",
      "TBD"
    ],
    [
      "Unmatched notified by email",
      "",
      "Jan 22, 2027",
      "TBD"
    ],
    [
      "Match results",
      "Jan 29, 2026",
      "Jan 25, 2027",
      "TBD"
    ],
    [
      "Preference signals",
      "10",
      "15 (home institution may be signaled)",
      "TBD"
    ],
    [
      "AUPO/AAO advice webinar",
      "Jun 2, 2025",
      "Jun 3, 2026",
      "Expect early Jun 2027"
    ]
  ],
  "rules": [
    "Interviews: all virtual for 2026-27 (including local students). Cap of 15 interviews per applicant; no interview scheduling outside the SF Match scheduler.",
    "AUPO states the mean was 9.3 interviews per applicant over three years, and that interviewing at more than 10 programs is associated with a 90% match rate (historical association).",
    "Letters: 3 required, at least one from an ophthalmologist when possible. Unlimited letters can be uploaded; assign exactly 3 per program (sets can differ by program).",
    "Personal statement: multiple versions allowed, assignable per program.",
    "Step 1 report required to complete the application. Step 2 CK not required at submission; timing is the applicant's choice with advisors.",
    "No limit on number of programs applied to. Away rotations are optional; scheduled ones can be listed on the supplemental form (not editable after submission).",
    "Integrated programs: matching includes the PGY-1; no NRMP enrollment needed. Joint programs: PGY-1 position guaranteed but not automatic; contact each program (may require NRMP).",
    "Both formats include 3-4 months of ophthalmology in PGY-1. ACGME required every program to be integrated or joint from 2023.",
    "Post-interview contact preferences vary by program.",
    "Open houses: programs may host in-person visits only for applicants they interviewed; program rank lists are already submitted by then. Names released to programs only after Dec 21."
  ],
  "stats": {
    "years": [
      "2019",
      "2020",
      "2021",
      "2022",
      "2023",
      "2024",
      "2025",
      "2026"
    ],
    "rows": [
      [
        "Registered",
        [
          790,
          737,
          829,
          877,
          855,
          917,
          958,
          977
        ]
      ],
      [
        "Applied to programs",
        [
          740,
          703,
          767,
          831,
          815,
          877,
          912,
          929
        ]
      ],
      [
        "Submitted rank list",
        [
          649,
          635,
          677,
          748,
          742,
          779,
          812,
          824
        ]
      ],
      [
        "Ranked by programs",
        [
          635,
          617,
          665,
          748,
          723,
          768,
          786,
          791
        ]
      ],
      [
        "Matched",
        [
          484,
          495,
          498,
          507,
          514,
          518,
          524,
          524
        ]
      ],
      [
        "Match rate (matched / rank list)",
        [
          "75%",
          "78%",
          "74%",
          "68%",
          "69%",
          "66%",
          "65%",
          "64%"
        ]
      ],
      [
        "Participating programs",
        [
          116,
          120,
          119,
          121,
          121,
          122,
          123,
          124
        ]
      ],
      [
        "Positions offered",
        [
          485,
          496,
          499,
          509,
          516,
          520,
          525,
          528
        ]
      ],
      [
        "Unfilled",
        [
          1,
          1,
          1,
          2,
          2,
          2,
          1,
          4
        ]
      ]
    ],
    "detail2026": [
      [
        "Programs",
        "124: 57 integrated (241 positions, all filled), 67 joint (287 positions, 283 filled)"
      ],
      [
        "Overall match rate",
        "524/824 = 64% of rank-list submitters; 524/977 = 54% of registered"
      ],
      [
        "By applicant type (matched / rank list)",
        "US allopathic seniors 449/624 = 72%; US allopathic grads 38/79 = 48%; US osteopathic seniors 16/57 = 28%; US osteopathic grads 2/10 = 20%; international grads 18/51 = 35%; international seniors 1/3"
      ],
      [
        "Applications",
        "Matched and unmatched both averaged 82 (matched range 2-126)"
      ],
      [
        "Interviews",
        "Matched mean 10 (1-30); unmatched mean 3 (0-11)"
      ],
      [
        "Step 2 CK (mean, range)",
        "US seniors matched 259 (220-289) vs unmatched 245 (218-274); US grads matched 250 vs unmatched 243"
      ],
      [
        "Publications (mean total)",
        "Matched 5.3 peer-reviewed (1.9 first-author, 3.4 co-author); unmatched 4.4 (1.3 first-author)"
      ],
      [
        "Signals (2025-26 cycle, 10 signals)",
        "99% of applicants used signals; 77% of matched applicants matched at a signaled program; invitation rate 41% for signaled applications vs 12% overall; programs received on average 589 applications, 73 of them with signals. Association, not proof of causation."
      ],
      [
        "Where applicants matched on rank list",
        "1st choice 46%, 2nd 17%, 3rd 12%, 4th 8%, 5th 7%, 6th or lower 10%"
      ],
      [
        "Repeat applicants",
        "108 repeat applicants; 49% matched (second cycle 52%, third cycle 22%)"
      ],
      [
        "Open houses",
        "44 of 124 programs offered tours; about 26% of 1,105 slots were filled"
      ]
    ]
  },
  "k": {
    "headline": {
      "window": "classes 2016-2026",
      "withoutGokoffski": 19
    },
    "k99": "All 179 K99/R00 PIs were screened; none was confirmed as an MD/PhD graduate of a US ophthalmology residency in 2016-2026.",
    "method": [
      "Window: classes 2016-2026. Programs without an MD/PhD graduate with a K carry 0.",
      "Two routes: roster route (program class pages) and award-first route (K holders, residency year from faculty profile).",
      "MD/PhD counts are floors. Weppelmann and Bojikian (MD and PhD earned separately) are counted and flagged.",
      "Data source: NIH RePORTER (excludes foundation and some VA awards); 465 NEI K-type projects FY2016-2026 (K08 114, K23 71, K99 163, R00 117). K awards from non-NEI institutes searched only for known MD/PhDs.",
      "Only named graduates with a source URL are counted. Programs without a published roster or degrees are not shown as zero here; they are simply not listed."
    ]
  },
  "tracks": [
    [
      "Penn",
      "iPOWER",
      "One full year of dedicated research before four clinical years. Eligibility, number of positions and how to apply are not stated."
    ],
    [
      "UCLA",
      "EyeSTAR",
      "7-year track combining residency with PhD/postdoc; new medical genetics track; supplemental due Sep 30."
    ],
    [
      "UCSF",
      "PROMOTE / R38",
      ""
    ],
    [
      "Michigan",
      "LENS / OPTICS / StARR-BRITE",
      "Page reports MD/PhD academic placement of 7 of 9 for its own graduates."
    ],
    [
      "Miami (Bascom Palmer)",
      "Research Track",
      "One of 9 first-year positions is a research position (8 clinical + 1 research)."
    ],
    [
      "UT Southwestern",
      "LoneSTAR",
      "Extra research year."
    ],
    [
      "Stanford",
      "SOAR",
      "5-year research track."
    ]
  ],
  "questions": [
    [
      "Verify what the websites disagree on",
      [
        "What is the actual class size and program length? (Pages and FREIDA disagree at about 20 programs.)",
        "What is the intern year really like: integrated or joint, which site, how much ophthalmology time?",
        "Has the class size changed recently, or is a change planned?"
      ]
    ],
    [
      "Surgical training",
      [
        "When did you do your first cataract, and what was your volume by graduation?",
        "Who gets cases: residents, fellows, VA versus county versus private sites?",
        "Is there simulation or structured skills assessment with feedback? How are surgical concerns raised and handled?",
        "What does autonomy look like in clinic and OR compared with what is advertised?"
      ]
    ],
    [
      "Research and the physician-scientist path",
      [
        "How many current residents have a PhD, and what do they do with protected time?",
        "Is there a research track or research year (K12, R38, T32, iPOWER/EyeSTAR/LoneSTAR-type)? How is it funded and who actually gets in?",
        "Have graduates gone on to K08/K23 awards? What did the program do to support that?",
        "How is clinic and OR time protected during research years? What does a typical junior faculty split look like?",
        "How much do residents publish, and who mentors the genetics/genomics-oriented ones?"
      ]
    ],
    [
      "Culture and support",
      [
        "What surprised you most after starting?",
        "How are feedback, remediation and wellness handled? Give a concrete example.",
        "How does the program respond when residents feel overwhelmed?",
        "What would you tell an applicant to ask that they usually don't?"
      ]
    ],
    [
      "Application process",
      [
        "How did signals and interview invitations seem to work from your side?",
        "How much did an away rotation matter?",
        "What stood out about the applicants who ranked highly?"
      ]
    ],
    [
      "Logistics and outcomes",
      [
        "Visa support: J-1 versus H-1B.",
        "Moonlighting, parental leave, housing, call burden.",
        "Step 2 and Step 3 timing expectations.",
        "Where do graduates go: fellowship, academic versus private practice? Do they hire their own graduates?"
      ]
    ]
  ],
  "questionTips": [
    "Ask PGY-2s and PGY-4s the same question and compare. Ask for 'last week' as a concrete example.",
    "Skip anything on the website (class size, fellowships offered). Use the master to ask about conflicts and gaps.",
    "Start with Penn faculty, alumni and meet-and-greets. This is a later step; the master itself involved no contact with programs."
  ],
  "recheck": {
    "open": [
      "Recheck the AUPO/SF Match 2027-28 calendar, signal count and interview rules when they post (expect late May to early June 2027).",
      "Re-read each program's page when its 2027-28 information posts; stale pages above have no dates until then.",
      "Add resident answers per program as you collect them.",
      "Add advisors, letter writers and manuscript status when you want them tracked here."
    ]
  },
  "retired": [
    "Hand counts of 58 MD/PhD graduates, 13 with K, 22%; and the first answer '10 programs, 20 graduates with K' (replaced by 17 / 33).",
    "Mass Eye and Ear 3 MD/PhD (partial roster; now 19). Stanford 4/4 and UCSF 5/3 undercounts (now 7/4 and 11/3). UCSD 6 (now 5), UIC 3 (now 2 + 1 unknown).",
    "NEI dollar and PI-count columns, Old Dominion 'zero' funding, Mass General Brigham $24.3M (removed by instruction).",
    "FREIDA length, class size and prior-GME values wherever an official page disagrees.",
    "2025 AUPO figures (123 programs, 56 integrated, 65% match rate): replaced by the 2026 report."
  ]
};
