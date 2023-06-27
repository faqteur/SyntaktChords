autowatch = 1;

inlets = 4; // midi note (list), scale index (int), root note (% 12) (int), chord index
outlets = 2; // midi note (list), messages to chord menu

var scales = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    [0, 2, 4, 5, 7, 9, 11],
    [0, 2, 3, 5, 7, 9, 10],
    [0, 1, 3, 5, 7, 8, 10],
    [0, 2, 4, 6, 7, 9, 11],
    [0, 2, 4, 5, 7, 9, 10],
    [0, 2, 3, 5, 7, 8, 10],
    [0, 1, 3, 5, 6, 8, 10],
    [0, 3, 5, 7, 10],
    [0, 2, 4, 7, 9],
    [0, 2, 3, 5, 7, 9, 11],
    [0, 2, 3, 5, 7, 8, 11],
    [0, 2, 4, 6, 8, 10],
    [0, 3, 5, 6, 7, 10],
    [0, 2, 3, 5, 7, 8, 10, 11],
    [0, 1, 4, 5, 6, 8, 11],
    [0, 1, 5, 6, 10],
    [0, 1, 5, 7, 10],
    [0, 2, 3, 7, 8],
    [0, 1, 3, 7, 8],
    [0, 1, 4, 5, 7, 8, 10],
    [0, 2, 3, 5, 6, 8, 9, 11],
    [0, 1, 3, 4, 6, 7, 9, 10],
    [0, 1, 3, 4, 5, 6, 8, 10],
    [0, 2, 4, 5, 6, 8, 10],
    [0, 1, 3, 4, 6, 8, 10],
    [0, 1, 3, 5, 7, 9, 10],
    [0, 2, 4, 6, 8, 9, 11],
    [0, 2, 4, 6, 7, 9, 10],
    [0, 1, 4, 5, 7, 8, 11],
    [0, 3, 4, 6, 7, 10, 11],
    [0, 1, 3, 4, 7, 8, 9],
    [0, 2, 3, 6, 7, 8, 11],
    [0, 1, 4, 5, 6, 9, 10],
    [0, 3, 4, 5, 8, 9, 11],
    [0, 1, 2, 5, 6, 8, 9]
];

var validChordsPerNotePerScale = [
  [
    [
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true
    ],
    [
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true
    ],
    [
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true
    ],
    [
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true
    ],
    [
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true
    ],
    [
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true
    ],
    [
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true
    ],
    [
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true
    ],
    [
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true
    ],
    [
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true
    ],
    [
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true
    ],
    [
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true, true, true, true, true,
      true, true
    ]
  ],
  [
    [
      true,  true,  true,  false, true,
      true,  true,  false, false, false,
      true,  false, false, false, true,
      false, true,  false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, true,  true,
      true,  true,  true
    ],
    [
      true,  true,  true,  true,  false,
      true,  true,  true,  false, false,
      false, true,  false, true,  false,
      true,  false, false, false, false,
      false, false, false, false, false,
      true,  false, false, false, false,
      false, false, false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  true,  false,
      false, true,  true,  false, false,
      false, true,  false, false, false,
      false, false, false, false, false,
      false, false, true,  false, true,
      false, false, false, false, false,
      true,  true,  false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  false, true,
      true,  false, false, false, false,
      true,  false, false, false, true,
      false, true,  false, true,  false,
      false, false, false, false, false,
      false, false, true,  true,  false,
      false, false, true,  false, true,
      true,  false, true
    ],
    [
      true,  true,  true,  false, true,
      true,  true,  false, true,  false,
      false, true,  false, false, true,
      false, true,  false, false, false,
      false, false, false, false, false,
      false, true,  false, false, false,
      false, false, false, true,  false,
      false, true,  true
    ],
    [
      true,  true,  true,  true,  false,
      true,  true,  true,  false, false,
      false, true,  false, true,  false,
      false, false, false, false, false,
      false, false, true,  false, true,
      true,  false, false, false, false,
      false, true,  false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, true,  false, true,
      false, false, true,  false, false,
      false, false, false, false, false,
      true,  false, false, false, false,
      false, true,  false
    ]
  ],
  [
    [
      true,  true,  true,  true,  false,
      true,  true,  true,  false, false,
      false, true,  false, true,  false,
      true,  false, false, false, false,
      false, false, false, false, false,
      true,  false, false, false, false,
      false, false, false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  true,  false,
      false, true,  true,  false, false,
      false, true,  false, false, false,
      false, false, false, false, false,
      false, false, true,  false, true,
      false, false, false, false, false,
      true,  true,  false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  false, true,
      true,  false, false, false, false,
      true,  false, false, false, true,
      false, true,  false, true,  false,
      false, false, false, false, false,
      false, false, true,  true,  false,
      false, false, true,  false, true,
      true,  false, true
    ],
    [
      true,  true,  true,  false, true,
      true,  true,  false, true,  false,
      false, true,  false, false, true,
      false, true,  false, false, false,
      false, false, false, false, false,
      false, true,  false, false, false,
      false, false, false, true,  false,
      false, true,  true
    ],
    [
      true,  true,  true,  true,  false,
      true,  true,  true,  false, false,
      false, true,  false, true,  false,
      false, false, false, false, false,
      false, false, true,  false, true,
      true,  false, false, false, false,
      false, true,  false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, true,  false, true,
      false, false, true,  false, false,
      false, false, false, false, false,
      true,  false, false, false, false,
      false, true,  false
    ],
    [
      true,  true,  true,  false, true,
      true,  true,  false, false, false,
      true,  false, false, false, true,
      false, true,  false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, true,  true,
      true,  true,  true
    ]
  ],
  [
    [
      true,  true,  true,  true,  false,
      false, true,  true,  false, false,
      false, true,  false, false, false,
      false, false, false, false, false,
      false, false, true,  false, true,
      false, false, false, false, false,
      true,  true,  false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  false, true,
      true,  false, false, false, false,
      true,  false, false, false, true,
      false, true,  false, true,  false,
      false, false, false, false, false,
      false, false, true,  true,  false,
      false, false, true,  false, true,
      true,  false, true
    ],
    [
      true,  true,  true,  false, true,
      true,  true,  false, true,  false,
      false, true,  false, false, true,
      false, true,  false, false, false,
      false, false, false, false, false,
      false, true,  false, false, false,
      false, false, false, true,  false,
      false, true,  true
    ],
    [
      true,  true,  true,  true,  false,
      true,  true,  true,  false, false,
      false, true,  false, true,  false,
      false, false, false, false, false,
      false, false, true,  false, true,
      true,  false, false, false, false,
      false, true,  false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, true,  false, true,
      false, false, true,  false, false,
      false, false, false, false, false,
      true,  false, false, false, false,
      false, true,  false
    ],
    [
      true,  true,  true,  false, true,
      true,  true,  false, false, false,
      true,  false, false, false, true,
      false, true,  false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, true,  true,
      true,  true,  true
    ],
    [
      true,  true,  true,  true,  false,
      true,  true,  true,  false, false,
      false, true,  false, true,  false,
      true,  false, false, false, false,
      false, false, false, false, false,
      true,  false, false, false, false,
      false, false, false, false, false,
      false, true,  true
    ]
  ],
  [
    [
      true,  true,  true,  false, true,
      true,  false, false, false, false,
      true,  false, false, false, true,
      false, true,  false, true,  false,
      false, false, false, false, false,
      false, false, true,  true,  false,
      false, false, true,  false, true,
      true,  false, true
    ],
    [
      true,  true,  true,  false, true,
      true,  true,  false, true,  false,
      false, true,  false, false, true,
      false, true,  false, false, false,
      false, false, false, false, false,
      false, true,  false, false, false,
      false, false, false, true,  false,
      false, true,  true
    ],
    [
      true,  true,  true,  true,  false,
      true,  true,  true,  false, false,
      false, true,  false, true,  false,
      false, false, false, false, false,
      false, false, true,  false, true,
      true,  false, false, false, false,
      false, true,  false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, true,  false, true,
      false, false, true,  false, false,
      false, false, false, false, false,
      true,  false, false, false, false,
      false, true,  false
    ],
    [
      true,  true,  true,  false, true,
      true,  true,  false, false, false,
      true,  false, false, false, true,
      false, true,  false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, true,  true,
      true,  true,  true
    ],
    [
      true,  true,  true,  true,  false,
      true,  true,  true,  false, false,
      false, true,  false, true,  false,
      true,  false, false, false, false,
      false, false, false, false, false,
      true,  false, false, false, false,
      false, false, false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  true,  false,
      false, true,  true,  false, false,
      false, true,  false, false, false,
      false, false, false, false, false,
      false, false, true,  false, true,
      false, false, false, false, false,
      true,  true,  false, false, false,
      false, true,  true
    ]
  ],
  [
    [
      true,  true,  true,  false, true,
      true,  true,  false, true,  false,
      false, true,  false, false, true,
      false, true,  false, false, false,
      false, false, false, false, false,
      false, true,  false, false, false,
      false, false, false, true,  false,
      false, true,  true
    ],
    [
      true,  true,  true,  true,  false,
      true,  true,  true,  false, false,
      false, true,  false, true,  false,
      false, false, false, false, false,
      false, false, true,  false, true,
      true,  false, false, false, false,
      false, true,  false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, true,  false, true,
      false, false, true,  false, false,
      false, false, false, false, false,
      true,  false, false, false, false,
      false, true,  false
    ],
    [
      true,  true,  true,  false, true,
      true,  true,  false, false, false,
      true,  false, false, false, true,
      false, true,  false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, true,  true,
      true,  true,  true
    ],
    [
      true,  true,  true,  true,  false,
      true,  true,  true,  false, false,
      false, true,  false, true,  false,
      true,  false, false, false, false,
      false, false, false, false, false,
      true,  false, false, false, false,
      false, false, false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  true,  false,
      false, true,  true,  false, false,
      false, true,  false, false, false,
      false, false, false, false, false,
      false, false, true,  false, true,
      false, false, false, false, false,
      true,  true,  false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  false, true,
      true,  false, false, false, false,
      true,  false, false, false, true,
      false, true,  false, true,  false,
      false, false, false, false, false,
      false, false, true,  true,  false,
      false, false, true,  false, true,
      true,  false, true
    ]
  ],
  [
    [
      true,  true,  true,  true,  false,
      true,  true,  true,  false, false,
      false, true,  false, true,  false,
      false, false, false, false, false,
      false, false, true,  false, true,
      true,  false, false, false, false,
      false, true,  false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, true,  false, true,
      false, false, true,  false, false,
      false, false, false, false, false,
      true,  false, false, false, false,
      false, true,  false
    ],
    [
      true,  true,  true,  false, true,
      true,  true,  false, false, false,
      true,  false, false, false, true,
      false, true,  false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, true,  true,
      true,  true,  true
    ],
    [
      true,  true,  true,  true,  false,
      true,  true,  true,  false, false,
      false, true,  false, true,  false,
      true,  false, false, false, false,
      false, false, false, false, false,
      true,  false, false, false, false,
      false, false, false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  true,  false,
      false, true,  true,  false, false,
      false, true,  false, false, false,
      false, false, false, false, false,
      false, false, true,  false, true,
      false, false, false, false, false,
      true,  true,  false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  false, true,
      true,  false, false, false, false,
      true,  false, false, false, true,
      false, true,  false, true,  false,
      false, false, false, false, false,
      false, false, true,  true,  false,
      false, false, true,  false, true,
      true,  false, true
    ],
    [
      true,  true,  true,  false, true,
      true,  true,  false, true,  false,
      false, true,  false, false, true,
      false, true,  false, false, false,
      false, false, false, false, false,
      false, true,  false, false, false,
      false, false, false, true,  false,
      false, true,  true
    ]
  ],
  [
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, true,  false, true,
      false, false, true,  false, false,
      false, false, false, false, false,
      true,  false, false, false, false,
      false, true,  false
    ],
    [
      true,  true,  true,  false, true,
      true,  true,  false, false, false,
      true,  false, false, false, true,
      false, true,  false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, true,  true,
      true,  true,  true
    ],
    [
      true,  true,  true,  true,  false,
      true,  true,  true,  false, false,
      false, true,  false, true,  false,
      true,  false, false, false, false,
      false, false, false, false, false,
      true,  false, false, false, false,
      false, false, false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  true,  false,
      false, true,  true,  false, false,
      false, true,  false, false, false,
      false, false, false, false, false,
      false, false, true,  false, true,
      false, false, false, false, false,
      true,  true,  false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  false, true,
      true,  false, false, false, false,
      true,  false, false, false, true,
      false, true,  false, true,  false,
      false, false, false, false, false,
      false, false, true,  true,  false,
      false, false, true,  false, true,
      true,  false, true
    ],
    [
      true,  true,  true,  false, true,
      true,  true,  false, true,  false,
      false, true,  false, false, true,
      false, true,  false, false, false,
      false, false, false, false, false,
      false, true,  false, false, false,
      false, false, false, true,  false,
      false, true,  true
    ],
    [
      true,  true,  true,  true,  false,
      true,  true,  true,  false, false,
      false, true,  false, true,  false,
      false, false, false, false, false,
      false, false, true,  false, true,
      true,  false, false, false, false,
      false, true,  false, false, false,
      false, true,  true
    ]
  ],
  [
    [
      true,  true,  true,  true,  false,
      false, true,  true,  false, false,
      false, true,  false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  false, true,
      true,  false, false, false, false,
      false, false, false, false, true,
      false, true,  false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, true
    ],
    [
      true,  true,  true,  false, false,
      true,  true,  false, false, false,
      false, true,  false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, true,  false
    ],
    [
      true,  true,  true,  false, false,
      true,  true,  false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, true,  true
    ]
  ],
  [
    [
      true,  true,  true,  false, true,
      true,  false, false, false, false,
      false, false, false, false, true,
      false, true,  false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, true
    ],
    [
      true,  true,  true,  false, false,
      true,  true,  false, false, false,
      false, true,  false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, true,  false
    ],
    [
      true,  true,  true,  false, false,
      true,  true,  false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  true,  false,
      false, true,  true,  false, false,
      false, true,  false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, true,  true
    ]
  ],
  [
    [
      true,  true,  true,  true,  false,
      true,  true,  false, false, true,
      false, false, false, true,  false,
      true,  false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  true,  false,
      false, true,  true,  false, false,
      false, true,  false, false, false,
      true,  false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, true,  false,
      false, true,  false, false, false,
      false, false, true,  true,  false,
      false, false, false, false, true,
      true,  false, false
    ],
    [
      true,  true,  true,  false, true,
      true,  false, false, true,  false,
      false, false, false, false, true,
      false, true,  false, true,  false,
      true,  false, false, false, false,
      false, true,  true,  false, false,
      false, false, true,  false, false,
      false, false, true
    ],
    [
      true,  true,  true,  false, true,
      true,  true,  false, true,  false,
      false, true,  false, false, true,
      false, false, false, false, false,
      false, true,  false, true,  false,
      false, true,  false, false, false,
      false, true,  false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, true,  false, true,
      false, false, true,  false, false,
      true,  false, false, false, false,
      false, false, false, false, false,
      false, true,  false
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, true,  true,  true,
      true,  true,  true,  true,  false,
      false, false, false, false, true,
      false, false, false, false, false,
      false, false, false
    ]
  ],
  [
    [
      true,  true,  true,  true,  false,
      true,  true,  false, false, true,
      false, false, false, true,  false,
      false, false, false, false, false,
      false, false, false, false, true,
      false, false, false, false, false,
      false, true,  false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, true,  false, false,
      false, false, true,  false, true,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, true,  false
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, true,  false, false, false,
      false, false, false, false, false,
      false, false, false, true,  true,
      true,  true,  false
    ],
    [
      true,  true,  true,  true,  false,
      true,  false, true,  false, false,
      false, false, true,  true,  false,
      true,  false, true,  false, true,
      false, false, false, false, false,
      true,  false, false, false, false,
      false, false, false, false, false,
      false, false, true
    ],
    [
      true,  true,  true,  false, true,
      false, true,  false, true,  false,
      false, true,  false, false, false,
      false, false, false, false, false,
      false, true,  false, true,  false,
      false, false, false, false, true,
      true,  true,  false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  true,  true,
      false, false, false, false, true,
      true,  false, true,  false, false,
      true,  true,  true,  true,  false,
      false, false, false, false, false,
      false, false, false, true,  false,
      false, false, true,  false, true,
      false, false, true
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, true,  false, false,
      false, false, true,  true,  false,
      false, true,  false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false
    ]
  ],
  [
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, true,  false,
      true,  true,  false, true,  false,
      false, true,  true,  false, false,
      false, false, false, false, false,
      false, false, false
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, true,  false,
      true,  true,  false, true,  false,
      false, true,  true,  false, false,
      false, false, false, false, false,
      false, false, false
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, true,  false,
      true,  true,  false, true,  false,
      false, true,  true,  false, false,
      false, false, false, false, false,
      false, false, false
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, true,  false,
      true,  true,  false, true,  false,
      false, true,  true,  false, false,
      false, false, false, false, false,
      false, false, false
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, true,  false,
      true,  true,  false, true,  false,
      false, true,  true,  false, false,
      false, false, false, false, false,
      false, false, false
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, true,  false,
      true,  true,  false, true,  false,
      false, true,  true,  false, false,
      false, false, false, false, false,
      false, false, false
    ]
  ],
  [
    [
      true,  true,  true,  true,  false,
      false, true,  true,  false, false,
      false, true,  false, false, false,
      false, false, true,  false, true,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  true,  true,
      true,  false, false, false, false,
      false, false, false, true,  true,
      true,  true,  false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, true
    ],
    [
      true,  true,  true,  false, false,
      true,  true,  false, false, false,
      false, true,  false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, true,  false,
      false, false, false, false, false,
      false, false, false, true,  false,
      false, false, false, false, true,
      false, false, false
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, true,  false
    ],
    [
      true,  true,  true,  false, false,
      true,  true,  false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, true,  false, false, false,
      false, true,  true
    ]
  ],
  [
    [
      true,  true,  true,  true,  false,
      true,  true,  true,  false, true,
      false, true,  false, true,  false,
      false, false, false, false, false,
      false, false, true,  false, true,
      true,  false, false, false, false,
      false, true,  false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, true,  false, false,
      false, false, true,  false, true,
      false, false, true,  false, false,
      false, false, false, false, false,
      true,  false, false, false, false,
      false, true,  false
    ],
    [
      true,  true,  true,  false, true,
      true,  true,  false, false, false,
      true,  false, false, false, true,
      false, true,  false, false, false,
      false, true,  false, false, false,
      false, false, false, false, false,
      false, true,  false, true,  true,
      true,  true,  true
    ],
    [
      true,  true,  true,  true,  false,
      true,  true,  true,  false, false,
      false, true,  true,  true,  false,
      true,  false, true,  false, true,
      false, false, false, false, false,
      true,  false, false, false, false,
      false, false, false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  true,  true,
      false, true,  true,  true,  false,
      false, true,  false, false, false,
      false, false, false, false, false,
      false, true,  true,  true,  true,
      false, false, false, false, true,
      true,  true,  false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  true,  true,
      true,  false, false, false, true,
      true,  false, true,  true,  true,
      true,  true,  true,  true,  false,
      false, false, false, false, false,
      false, false, true,  true,  false,
      false, false, true,  false, true,
      true,  false, true
    ],
    [
      true,  true,  true,  false, true,
      true,  true,  false, true,  false,
      false, true,  false, false, true,
      false, true,  false, false, false,
      false, false, false, false, false,
      false, true,  false, false, true,
      false, false, false, true,  false,
      false, true,  true
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, true,  false, false,
      false, false, true,  true,  false,
      false, true,  false, false, false,
      false, false, false, true,  false,
      false, false, false, false, true,
      false, false, false
    ]
  ],
  [
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, true,  false,
      false, true,  false, false, false,
      false, false, false, true,  false,
      true,  false, false, false, false,
      false, true,  false
    ],
    [
      true,  true,  true,  true,  true,
      false, true,  true,  true,  true,
      true,  true,  false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  false, true,
      true,  false, false, false, false,
      false, false, false, false, true,
      false, true,  false, false, false,
      false, true,  false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, true
    ],
    [
      true,  true,  true,  true,  false,
      false, false, false, false, true,
      false, false, false, false, false,
      false, false, true,  false, false,
      false, false, false, false, true,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, true
    ],
    [
      true,  true,  true,  false, false,
      true,  true,  false, false, false,
      false, true,  false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, true,  true,  true,  false,
      false, false, false, false, false,
      false, false, false, true,  false,
      false, true,  false
    ],
    [
      true,  true,  true,  false, false,
      true,  true,  false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, true,  true
    ]
  ],
  [
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, true,  false
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, true,  true,
      false, true,  false
    ],
    [
      true,  true,  true,  false, false,
      false, true,  false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      true,  true,  false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  false, true,
      false, false, false, false, false,
      true,  false, false, false, false,
      false, false, false, true,  false,
      false, false, false, false, false,
      false, false, false, true,  false,
      false, false, true,  false, false,
      false, false, true
    ],
    [
      true,  true,  true,  true,  false,
      true,  false, false, false, false,
      false, false, false, true,  false,
      false, false, false, false, false,
      false, false, false, false, true,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, true
    ]
  ],
  [
    [
      true,  true,  true,  false, false,
      false, true,  false, false, false,
      false, true,  false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, true,  false,
      false, false, false, false, false,
      false, false, false, true,  false,
      false, false, false, false, true,
      false, false, false
    ],
    [
      true,  true,  true,  false, false,
      true,  true,  false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, true,  false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, true,  false, true,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, true,  false
    ],
    [
      true,  true,  true,  true,  false,
      true,  false, false, false, false,
      false, false, false, true,  false,
      true,  false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, true
    ]
  ],
  [
    [
      true,  true,  true,  true,  false,
      true,  false, false, false, false,
      false, false, false, true,  false,
      false, false, false, false, false,
      false, false, false, false, true,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, true
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, true,  false
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, true,  true,
      false, true,  false
    ],
    [
      true,  true,  true,  false, false,
      false, true,  false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      true,  true,  false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  false, true,
      false, false, false, false, false,
      true,  false, false, false, false,
      false, false, false, true,  false,
      false, false, false, false, false,
      false, false, false, true,  false,
      false, false, true,  false, false,
      false, false, true
    ]
  ],
  [
    [
      true,  true,  true,  true,  false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, true,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, true
    ],
    [
      true,  true,  true,  false, false,
      true,  false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, true
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, true,  false,
      false, true,  false
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      true,  false, false, false, false,
      false, true,  false
    ],
    [
      true,  true,  true,  false, true,
      false, true,  false, false, false,
      true,  false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, true,  true
    ]
  ],
  [
    [
      true,  true,  true,  false, true,
      false, true,  false, true,  false,
      false, true,  false, false, false,
      false, false, false, false, false,
      false, true,  false, true,  false,
      false, false, false, false, true,
      true,  true,  false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  true,  true,
      false, false, false, false, true,
      true,  false, true,  false, false,
      true,  true,  true,  true,  false,
      false, false, false, false, false,
      false, false, false, true,  false,
      false, false, true,  false, true,
      false, false, true
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, true,  false, false,
      false, false, true,  true,  false,
      false, true,  false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false
    ],
    [
      true,  true,  true,  true,  false,
      true,  true,  false, false, true,
      false, false, false, true,  false,
      false, false, false, false, false,
      false, false, false, false, true,
      false, false, false, false, false,
      false, true,  false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, true,  false, false,
      false, false, true,  false, true,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, true,  false
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, true,  false, false, false,
      false, false, false, false, false,
      false, false, false, true,  true,
      true,  true,  false
    ],
    [
      true,  true,  true,  true,  false,
      true,  false, true,  false, false,
      false, false, true,  true,  false,
      true,  false, true,  false, true,
      false, false, false, false, false,
      true,  false, false, false, false,
      false, false, false, false, false,
      false, false, true
    ]
  ],
  [
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, true,  false, false,
      false, false, true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, true,  false
    ],
    [
      true,  true,  true,  true,  true,
      false, false, true,  true,  false,
      false, false, true,  false, false,
      true,  true,  true,  true,  true,
      true,  false, false, false, false,
      false, false, false, false, true,
      false, false, true,  false, false,
      false, false, true
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, true,  false, false,
      false, false, true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, true,  false
    ],
    [
      true,  true,  true,  true,  true,
      false, false, true,  true,  false,
      false, false, true,  false, false,
      true,  true,  true,  true,  true,
      true,  false, false, false, false,
      false, false, false, false, true,
      false, false, true,  false, false,
      false, false, true
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, true,  false, false,
      false, false, true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, true,  false
    ],
    [
      true,  true,  true,  true,  true,
      false, false, true,  true,  false,
      false, false, true,  false, false,
      true,  true,  true,  true,  true,
      true,  false, false, false, false,
      false, false, false, false, true,
      false, false, true,  false, false,
      false, false, true
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, true,  false, false,
      false, false, true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, true,  false
    ],
    [
      true,  true,  true,  true,  true,
      false, false, true,  true,  false,
      false, false, true,  false, false,
      true,  true,  true,  true,  true,
      true,  false, false, false, false,
      false, false, false, false, true,
      false, false, true,  false, false,
      false, false, true
    ]
  ],
  [
    [
      true,  true,  true,  true,  true,
      false, false, true,  true,  false,
      false, false, true,  false, false,
      true,  true,  true,  true,  true,
      true,  false, false, false, false,
      false, false, false, false, true,
      false, false, true,  false, false,
      false, false, true
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, true,  false, false,
      false, false, true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, true,  false
    ],
    [
      true,  true,  true,  true,  true,
      false, false, true,  true,  false,
      false, false, true,  false, false,
      true,  true,  true,  true,  true,
      true,  false, false, false, false,
      false, false, false, false, true,
      false, false, true,  false, false,
      false, false, true
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, true,  false, false,
      false, false, true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, true,  false
    ],
    [
      true,  true,  true,  true,  true,
      false, false, true,  true,  false,
      false, false, true,  false, false,
      true,  true,  true,  true,  true,
      true,  false, false, false, false,
      false, false, false, false, true,
      false, false, true,  false, false,
      false, false, true
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, true,  false, false,
      false, false, true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, true,  false
    ],
    [
      true,  true,  true,  true,  true,
      false, false, true,  true,  false,
      false, false, true,  false, false,
      true,  true,  true,  true,  true,
      true,  false, false, false, false,
      false, false, false, false, true,
      false, false, true,  false, false,
      false, false, true
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, true,  false, false,
      false, false, true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, true,  false
    ]
  ],
  [
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, true,  true,  true,
      true,  true,  true,  true,  false,
      false, false, false, false, true,
      true,  false, false, false, false,
      false, true,  false
    ],
    [
      true,  true,  true,  true,  true,
      true,  true,  false, false, true,
      true,  false, false, true,  true,
      true,  true,  false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, true,  true,
      true,  true,  true
    ],
    [
      true,  true,  true,  true,  false,
      true,  true,  true,  false, false,
      false, true,  false, true,  false,
      true,  false, false, false, false,
      false, false, false, false, false,
      true,  false, false, false, false,
      false, false, false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, true,  false,
      false, true,  false, false, false,
      false, false, true,  true,  false,
      false, false, false, false, true,
      true,  false, false
    ],
    [
      true,  true,  true,  true,  false,
      false, true,  true,  false, true,
      false, true,  false, false, false,
      false, false, false, false, false,
      false, false, true,  false, true,
      false, false, false, false, false,
      true,  true,  false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  false, true,
      true,  false, false, true,  false,
      true,  false, false, false, true,
      false, true,  false, true,  false,
      true,  false, false, false, false,
      false, true,  true,  true,  false,
      false, false, true,  false, true,
      true,  false, true
    ],
    [
      true,  true, true,  false, true,
      true,  true, false, true,  false,
      false, true, false, false, true,
      false, true, false, false, false,
      false, true, false, true,  false,
      false, true, false, false, false,
      false, true, false, true,  false,
      false, true, true
    ],
    [
      true,  true,  true,  true,  false,
      true,  true,  true,  false, false,
      false, true,  false, true,  false,
      false, false, true,  false, true,
      false, false, true,  false, true,
      true,  false, false, false, false,
      false, true,  false, false, false,
      false, true,  true
    ]
  ],
  [
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, true,  false,
      true,  true,  false, true,  false,
      false, true,  true,  false, false,
      false, false, false, false, false,
      false, true,  false
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, true,  true,  true,
      true,  true,  true,  true,  false,
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, true,  false,
      true,  true,  false, true,  false,
      false, true,  true,  false, true,
      false, false, false, false, false,
      false, false, false
    ],
    [
      true,  true,  true,  true,  false,
      false, true,  false, false, true,
      false, false, false, false, false,
      true,  false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, true,  false,
      true,  true,  false, true,  false,
      false, true,  true,  true,  false,
      false, false, false, false, false,
      true,  false, false
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, true,  false,
      true,  true,  false, true,  false,
      false, true,  true,  false, false,
      false, false, false, false, false,
      false, false, false
    ],
    [
      true,  true,  true,  false, true,
      true,  false, false, true,  false,
      false, false, false, false, true,
      false, false, false, true,  false,
      true,  true,  false, true,  false,
      false, true,  true,  false, false,
      false, false, true,  false, false,
      false, false, true
    ]
  ],
  [
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, true,  true,  true,
      true,  true,  true,  true,  false,
      false, false, false, false, true,
      false, false, false, false, false,
      false, false, false
    ],
    [
      true,  true,  true,  true,  false,
      true,  true,  false, false, true,
      false, false, false, true,  false,
      true,  false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  true,  false,
      false, true,  true,  false, false,
      false, true,  false, false, false,
      true,  false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, true,  false,
      false, true,  false, false, false,
      false, false, true,  true,  false,
      false, false, false, false, true,
      true,  false, false
    ],
    [
      true,  true,  true,  false, true,
      true,  false, false, true,  false,
      false, false, false, false, true,
      false, true,  false, true,  false,
      true,  false, false, false, false,
      false, true,  true,  false, false,
      false, false, true,  false, false,
      false, false, true
    ],
    [
      true,  true,  true,  false, true,
      true,  true,  false, true,  false,
      false, true,  false, false, true,
      false, false, false, false, false,
      false, true,  false, true,  false,
      false, true,  false, false, false,
      false, true,  false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, true,  false, true,
      false, false, true,  false, false,
      true,  false, false, false, false,
      false, false, false, false, false,
      false, true,  false
    ]
  ],
  [
    [
      true,  true,  true,  true,  false,
      false, true,  true,  false, false,
      false, true,  false, false, false,
      true,  false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, true,  false,
      false, true,  false, false, false,
      false, false, true,  true,  false,
      false, false, false, false, true,
      true,  false, false
    ],
    [
      true,  true,  true,  false, true,
      true,  false, false, true,  false,
      false, false, false, false, true,
      false, true,  false, true,  false,
      true,  false, false, false, false,
      false, true,  true,  false, false,
      false, false, true,  false, false,
      false, false, true
    ],
    [
      true,  true,  true,  false, true,
      true,  true,  false, true,  false,
      false, true,  false, false, true,
      false, false, false, false, false,
      false, true,  false, true,  false,
      false, true,  false, false, false,
      false, true,  false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, true,  false, true,
      false, false, true,  false, false,
      true,  false, false, false, false,
      false, false, false, false, false,
      false, true,  false
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, true,  true,  true,
      true,  true,  true,  true,  false,
      false, false, false, false, true,
      false, false, false, false, false,
      false, false, false
    ],
    [
      true,  true,  true,  true,  false,
      true,  true,  false, false, true,
      false, false, false, true,  false,
      true,  false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, true,  true
    ]
  ],
  [
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, true,  false,
      false, true,  false, false, false,
      false, false, true,  true,  false,
      false, false, false, false, true,
      true,  false, false
    ],
    [
      true,  true,  true,  false, true,
      true,  false, false, true,  false,
      false, false, false, false, true,
      false, true,  false, true,  false,
      true,  false, false, false, false,
      false, true,  true,  false, false,
      false, false, true,  false, false,
      false, false, true
    ],
    [
      true,  true,  true,  false, true,
      true,  true,  false, true,  false,
      false, true,  false, false, true,
      false, false, false, false, false,
      false, true,  false, true,  false,
      false, true,  false, false, false,
      false, true,  false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, true,  false, true,
      false, false, true,  false, false,
      true,  false, false, false, false,
      false, false, false, false, false,
      false, true,  false
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, true,  true,  true,
      true,  true,  true,  true,  false,
      false, false, false, false, true,
      false, false, false, false, false,
      false, false, false
    ],
    [
      true,  true,  true,  true,  false,
      true,  true,  false, false, true,
      false, false, false, true,  false,
      true,  false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  true,  false,
      false, true,  true,  false, false,
      false, true,  false, false, false,
      true,  false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, true,  true
    ]
  ],
  [
    [
      true,  true,  true,  false, true,
      true,  false, false, true,  false,
      false, false, false, false, true,
      false, true,  false, true,  false,
      true,  false, false, false, false,
      false, true,  true,  false, false,
      false, false, true,  false, false,
      false, false, true
    ],
    [
      true,  true,  true,  false, true,
      true,  true,  false, true,  false,
      false, true,  false, false, true,
      false, false, false, false, false,
      false, true,  false, true,  false,
      false, true,  false, false, false,
      false, true,  false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, true,  false, true,
      false, false, true,  false, false,
      true,  false, false, false, false,
      false, false, false, false, false,
      false, true,  false
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, true,  true,  true,
      true,  true,  true,  true,  false,
      false, false, false, false, true,
      false, false, false, false, false,
      false, false, false
    ],
    [
      true,  true,  true,  true,  false,
      true,  true,  false, false, true,
      false, false, false, true,  false,
      true,  false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  true,  false,
      false, true,  true,  false, false,
      false, true,  false, false, false,
      true,  false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, true,  false,
      false, true,  false, false, false,
      false, false, true,  true,  false,
      false, false, false, false, true,
      true,  false, false
    ]
  ],
  [
    [
      true,  true,  true,  false, true,
      false, true,  false, false, false,
      true,  false, false, false, false,
      false, false, false, false, false,
      false, true,  false, false, false,
      false, false, false, false, false,
      true,  true,  false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  true,  true,
      false, false, true,  true,  true,
      true,  false, false, false, false,
      false, false, true,  true,  true,
      true,  false, false, false, false,
      false, false, false, true,  false,
      false, false, true,  false, false,
      false, false, true
    ],
    [
      true,  true,  true,  true,  true,
      false, false, false, false, false,
      false, false, false, false, false,
      true,  true,  false, false, false,
      false, true,  false, false, true,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, true
    ],
    [
      true,  true,  true,  true,  false,
      true,  false, false, false, true,
      false, false, false, true,  false,
      false, false, true,  false, false,
      false, false, false, false, true,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, true
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, true,  false,
      true,  false, false, false, false,
      false, false, false, false, true,
      false, false, false, true,  false,
      false, true,  false
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, true,  false, false, false,
      false, false, false, false, false,
      false, false, false, true,  true,
      false, true,  false
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      true,  false, false, false, false,
      false, true,  false
    ]
  ],
  [
    [
      true,  true,  true,  true,  true,
      false, false, true,  true,  true,
      true,  false, false, false, false,
      false, false, true,  true,  true,
      true,  false, false, false, false,
      false, false, false, true,  false,
      false, false, true,  false, false,
      false, false, true
    ],
    [
      true,  true,  true,  true,  true,
      false, false, false, false, false,
      false, false, false, false, false,
      true,  true,  false, false, false,
      false, true,  false, false, true,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, true
    ],
    [
      true,  true,  true,  true,  false,
      true,  false, false, false, true,
      false, false, false, true,  false,
      false, false, true,  false, false,
      false, false, false, false, true,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, true
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, true,  false,
      true,  false, false, false, false,
      false, false, false, false, true,
      false, false, false, true,  false,
      false, true,  false
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, true,  false, false, false,
      false, false, false, false, false,
      false, false, false, true,  true,
      false, true,  false
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      true,  false, false, false, false,
      false, true,  false
    ],
    [
      true,  true,  true,  false, true,
      false, true,  false, false, false,
      true,  false, false, false, false,
      false, false, false, false, false,
      false, true,  false, false, false,
      false, false, false, false, false,
      true,  true,  false, false, false,
      false, true,  true
    ]
  ],
  [
    [
      true,  true,  true,  true,  true,
      false, false, false, false, false,
      false, false, false, false, false,
      true,  true,  false, false, false,
      false, true,  false, false, true,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, true
    ],
    [
      true,  true,  true,  true,  false,
      true,  false, false, false, true,
      false, false, false, true,  false,
      false, false, true,  false, false,
      false, false, false, false, true,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, true
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, true,  false,
      true,  false, false, false, false,
      false, false, false, false, true,
      false, false, false, true,  false,
      false, true,  false
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, true,  false, false, false,
      false, false, false, false, false,
      false, false, false, true,  true,
      false, true,  false
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      true,  false, false, false, false,
      false, true,  false
    ],
    [
      true,  true,  true,  false, true,
      false, true,  false, false, false,
      true,  false, false, false, false,
      false, false, false, false, false,
      false, true,  false, false, false,
      false, false, false, false, false,
      true,  true,  false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  true,  true,
      false, false, true,  true,  true,
      true,  false, false, false, false,
      false, false, true,  true,  true,
      true,  false, false, false, false,
      false, false, false, true,  false,
      false, false, true,  false, false,
      false, false, true
    ]
  ],
  [
    [
      true,  true,  true,  true,  false,
      true,  false, false, false, true,
      false, false, false, true,  false,
      false, false, true,  false, false,
      false, false, false, false, true,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, true
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, true,  false,
      true,  false, false, false, false,
      false, false, false, false, true,
      false, false, false, true,  false,
      false, true,  false
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, true,  false, false, false,
      false, false, false, false, false,
      false, false, false, true,  true,
      false, true,  false
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      true,  false, false, false, false,
      false, true,  false
    ],
    [
      true,  true,  true,  false, true,
      false, true,  false, false, false,
      true,  false, false, false, false,
      false, false, false, false, false,
      false, true,  false, false, false,
      false, false, false, false, false,
      true,  true,  false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  true,  true,
      false, false, true,  true,  true,
      true,  false, false, false, false,
      false, false, true,  true,  true,
      true,  false, false, false, false,
      false, false, false, true,  false,
      false, false, true,  false, false,
      false, false, true
    ],
    [
      true,  true,  true,  true,  true,
      false, false, false, false, false,
      false, false, false, false, false,
      true,  true,  false, false, false,
      false, true,  false, false, true,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, true
    ]
  ],
  [
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, true,  false,
      true,  false, false, false, false,
      false, false, false, false, true,
      false, false, false, true,  false,
      false, true,  false
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, true,  false, false, false,
      false, false, false, false, false,
      false, false, false, true,  true,
      false, true,  false
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      true,  false, false, false, false,
      false, true,  false
    ],
    [
      true,  true,  true,  false, true,
      false, true,  false, false, false,
      true,  false, false, false, false,
      false, false, false, false, false,
      false, true,  false, false, false,
      false, false, false, false, false,
      true,  true,  false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  true,  true,
      false, false, true,  true,  true,
      true,  false, false, false, false,
      false, false, true,  true,  true,
      true,  false, false, false, false,
      false, false, false, true,  false,
      false, false, true,  false, false,
      false, false, true
    ],
    [
      true,  true,  true,  true,  true,
      false, false, false, false, false,
      false, false, false, false, false,
      true,  true,  false, false, false,
      false, true,  false, false, true,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, true
    ],
    [
      true,  true,  true,  true,  false,
      true,  false, false, false, true,
      false, false, false, true,  false,
      false, false, true,  false, false,
      false, false, false, false, true,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, true
    ]
  ],
  [
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, true,  false, false, false,
      false, false, false, false, false,
      false, false, false, true,  true,
      false, true,  false
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      true,  false, false, false, false,
      false, true,  false
    ],
    [
      true,  true,  true,  false, true,
      false, true,  false, false, false,
      true,  false, false, false, false,
      false, false, false, false, false,
      false, true,  false, false, false,
      false, false, false, false, false,
      true,  true,  false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  true,  true,
      false, false, true,  true,  true,
      true,  false, false, false, false,
      false, false, true,  true,  true,
      true,  false, false, false, false,
      false, false, false, true,  false,
      false, false, true,  false, false,
      false, false, true
    ],
    [
      true,  true,  true,  true,  true,
      false, false, false, false, false,
      false, false, false, false, false,
      true,  true,  false, false, false,
      false, true,  false, false, true,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, true
    ],
    [
      true,  true,  true,  true,  false,
      true,  false, false, false, true,
      false, false, false, true,  false,
      false, false, true,  false, false,
      false, false, false, false, true,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, true
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, true,  false,
      true,  false, false, false, false,
      false, false, false, false, true,
      false, false, false, true,  false,
      false, true,  false
    ]
  ],
  [
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      true,  false, false, false, false,
      false, true,  false
    ],
    [
      true,  true,  true,  false, true,
      false, true,  false, false, false,
      true,  false, false, false, false,
      false, false, false, false, false,
      false, true,  false, false, false,
      false, false, false, false, false,
      true,  true,  false, false, false,
      false, true,  true
    ],
    [
      true,  true,  true,  true,  true,
      false, false, true,  true,  true,
      true,  false, false, false, false,
      false, false, true,  true,  true,
      true,  false, false, false, false,
      false, false, false, true,  false,
      false, false, true,  false, false,
      false, false, true
    ],
    [
      true,  true,  true,  true,  true,
      false, false, false, false, false,
      false, false, false, false, false,
      true,  true,  false, false, false,
      false, true,  false, false, true,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, true
    ],
    [
      true,  true,  true,  true,  false,
      true,  false, false, false, true,
      false, false, false, true,  false,
      false, false, true,  false, false,
      false, false, false, false, true,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, true
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, true,  false,
      true,  false, false, false, false,
      false, false, false, false, true,
      false, false, false, true,  false,
      false, true,  false
    ],
    [
      true,  true,  true,  false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, true,  false, false, false,
      false, false, false, false, false,
      false, false, false, true,  true,
      false, true,  false
    ]
  ]
];

var currentScaleIndex = 0;
var currentRootNote = 0;
var currentNote = -1;
var currentChordIndex = -1;

function msg_int(i) {
	if (inlet == 1) {
		if (i >= 0 && i < scales.length) {
			currentScaleIndex = i;
			currentNote = -1;
			currentChordIndex = -1;
		}
	} else if (inlet == 2) {
		if (i >= 0 && i < 12) {
			currentRootNote = i;
			currentNote = -1;
			currentChordIndex = -1;
		}
	} else if (inlet == 3) {
		if (i < 38) { // 38 chord values
			currentChordIndex = i;
		}
	}
}

function getClosestValidChord(validChords) {
	var index = currentChordIndex;
	if (index < 0) {
		var firstValidChord = validChords.indexOf(true, 3);
		if (firstValidChord > -1) {
			return firstValidChord;
		} else {
			return 2; // the first 3 "chords" are always valid, as it's the unison variations
		}
	} else if (index < 3) {
		return index;
	} else {
		var i = 0;
		while (index - i >= 3 || index + i < validChords.length) {
			var indexInf = Math.max(index - i, 3);
			if (validChords[indexInf]) return indexInf;

			var indexSup = Math.min(index + i, validChords.length - 1);
			if (validChords[indexSup]) return indexSup;

			i++;
		}
		return 2;
	}
}

function list() {
	var notePack = arrayfromargs(arguments);
	var noteInScaleIndex = scales[currentScaleIndex].indexOf((notePack[0] - currentRootNote) % 12);
	if (noteInScaleIndex >= 0) {
		if (notePack[1] > 0 && notePack[0] != currentNote) {
			currentNote = notePack[0];
			var validChords = validChordsPerNotePerScale[currentScaleIndex][noteInScaleIndex];
			for (var i = 0; i < validChords.length; i++) {
				outlet(1, "enableitem", i, validChords[i]);
			}
			outlet(1, getClosestValidChord(validChords));
		}

		outlet(0, notePack);
	}
}
