import { AddonItem, FAQItem, PricingPackage, ServiceAreaCity, ServiceItem, TestimonialItem } from '../types';

export const INSTAGRAM_LOGO_URL =
  'https://instagram.fisb7-1.fna.fbcdn.net/v/t51.82787-19/810813935_18020712431870486_3555948624709367545_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fisb7-1.fna.fbcdn.net&_nc_cat=102&_nc_oc=Q6cZ2gGKXpab5eYW_-ev_CZVAki5mAsNmyf1KqNWcfIJCGOy7AYByVPbYen5zhgH6uLhh20&_nc_ohc=9RH9lYxqnkcQ7kNvwEhCDh9&_nc_gid=sEzBzvFQIGZyYuWAh_Ej1w&edm=APoiHPcBAAAA&ccb=7-5&oh=00_AQJL_5_WsaZJtz2OLRbmJQ3wqoaF6kl51KTAQZDGOAdGXA&oe=6AB6F8C4&_nc_sid=22de04';

export const BUSINESS_INFO = {
  name: 'Now That’s Clean',
  legalName: 'NTC Cleaning Service (Residential & Commercial Cleaning Services LLC)',
  shortName: 'NTC Cleaning Service',
  tagline: 'Detail-Focused, Concierge-Style Cleaning',
  subheading:
    'At Now That’s Clean, we provide a detail-focused, concierge-style cleaning experience for clients who value their time, comfort, consistency, and exceptional results across Oakland County and Metro Detroit.',
  phone: '346-491-1010',
  phoneRaw: '+13464911010',
  email: 'nowthatscleanmi@gmail.com',
  address: 'Oakland County & Metro Detroit Area, MI',
  logoUrl: '/ntc-logo.jpg',
  logoExternalUrl: INSTAGRAM_LOGO_URL,
  bookingUrl: 'https://booknowthatsclean.as.me/schedule/781535ef',
  instagram: 'https://www.instagram.com/ntcleandetroit/',
  instagramUrl: 'https://www.instagram.com/ntcleandetroit/',
  instagramHandle: 'ntcleandetroit',
  serviceRegion: 'Oakland County, Michigan | Metro Detroit Area',
  links: {
    scheduleProducts: 'https://linktr.ee/NowThatsClean',
    referralProgram: 'https://ntcpoints.referralcandy.com/v2/rewards/join?campaignUrlPath=campaign-2&locale=undefined',
    etsyShop: 'https://cleaningbizacademy.etsy.com/listing/4578147408',
  },
  featuredLinks: [
    {
      id: 'schedule-products',
      title: 'Schedule Services & Products',
      subtitle: 'Official Linktree Hub',
      url: 'https://linktr.ee/NowThatsClean',
      displayUrl: 'linktr.ee/NowThatsClean',
      description: 'Quickly book appointments, schedule recurring cleanings, view product bundles, and access all client portals in one convenient hub.',
      category: 'Booking & Scheduling',
      badge: 'Official Hub'
    },
    {
      id: 'referral-program',
      title: 'NTC Referral Program',
      subtitle: 'Earn Rewards & Service Credits',
      url: 'https://ntcpoints.referralcandy.com/v2/rewards/join?campaignUrlPath=campaign-2&locale=undefined',
      displayUrl: 'ntcpoints.referralcandy.com',
      description: 'Join our client reward circle! Share Now That’s Clean with friends, neighbors, and coworkers to earn points and discounts on every referral.',
      category: 'Client Rewards',
      badge: 'Earn Points'
    },
    {
      id: 'etsy-wow-items',
      title: 'BUDGET FRIENDLY ITEMS TO WOW YOUR CLIENT',
      subtitle: 'Cleaning Biz Academy on Etsy',
      url: 'https://cleaningbizacademy.etsy.com/listing/4578147408',
      displayUrl: 'cleaningbizacademy.etsy.com',
      description: 'Discover curated high-impact, budget-friendly essentials, finishing touches, and client-delight items vetted by professional cleaning experts.',
      category: 'Pro Products & Academy',
      badge: 'Etsy Collection'
    }
  ],
  paymentInfo: {
    accepted: 'Tap to Pay & Major Cards (Processed securely via Square)',
    notAccepted: 'Cash is not accepted',
    note: 'Payments processed smoothly through Square checkout.'
  },
  cancellationPolicy:
    'We understand that plans can change. However, because appointment times are reserved specifically for each client, same-day cancellations are subject to a 50% service fee. The applicable fee will be charged at the time of cancellation.',
  hours: {
    weekdays: 'Monday – Saturday: Flexible Concierge Scheduling',
    saturday: 'Saturday: Weekend Appointments Available',
    sunday: 'Sunday: Laundry pickup & special scheduling',
    notice: 'Customers do not need to be present during appointment as long as secure entry instructions are arranged in advance.'
  },
  serviceAreasList: [
    'Oakland County',
    'Metro Detroit Area'
  ],
  deepCleanSpecial: {
    title: 'All Deep Cleanings Come With a FREE Choice Of:',
    options: [
      'Inside refrigerator cleaning',
      'Baseboards cleaning',
      'Inside stove cleaning'
    ]
  },
  offers: [
    {
      id: 'first-time',
      code: 'FIRST TIME',
      title: 'New Clients Special',
      discount: '$20 – $30 OFF',
      description: 'Use code FIRST TIME for $20 OFF at booking checkout (up to $30 OFF featured on Instagram).'
    },
    {
      id: 'existing-client',
      code: 'NTC',
      title: 'Existing Client Loyalty',
      discount: '$10 OFF',
      description: 'Use code NTC for $10 OFF your recurring or maintenance cleaning appointments.'
    },
    {
      id: 'appreciation',
      code: 'NOVDEC',
      title: 'Customer Appreciation Months',
      discount: '15% OFF',
      description: 'Use code NOVDEC for 15% OFF all services booked during November and December.'
    }
  ],
  prepChecklist: [
    {
      id: 'info',
      title: 'Confirm Contact & Property Details',
      desc: 'Verify your phone number, entry codes, and service specifications before arrival.'
    },
    {
      id: 'clutter',
      title: 'Remove Excessive Clutter',
      desc: 'Clear floor clutter, clothing, and bath mats so our team can access all surfaces.'
    },
    {
      id: 'pets',
      title: 'Secure All Pets',
      desc: 'Ensure all household pets are safely secured before our team enters the property.'
    },
    {
      id: 'utilities',
      title: 'Ensure Utilities are Active',
      desc: 'Verify that working electricity and hot water access are available throughout the visit.'
    }
  ]
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: '3-rooms-clean',
    title: '3 Rooms Only Professionally Cleaned',
    category: 'residential',
    popularBadge: 'Client Favorite • $150 Base',
    shortDescription: 'Choose any three rooms in your home and let Now That’s Clean give them the detailed attention they deserve.',
    fullDescription:
      'Choose any three rooms in your home (for example: living room, kitchen, master bedroom, or bathrooms) and let Now That’s Clean give them our signature concierge-level attention. Additional rooms can easily be added for $50 each.',
    image: '/assets/ntc/appointmentType-98265611.jpeg',
    startingPrice: '$150.00',
    includes: [
      'Any 3 selected rooms of your choice',
      'Detailed dusting of surfaces, light fixtures, and accessible corners',
      'Vacuuming carpets, rugs, and runners',
      'Mopping and floor sanitation',
      'Sanitizing high-touch handles, switches, and tables',
      'Bathroom and kitchen sanitizing if chosen as part of the 3 rooms',
      'Additional rooms available for $50 each'
    ],
    recommendedAddons: ['Baseboards', 'Squeaky Clean Refrigerator', 'Squeaky Clean Exterior /Interior Stove']
  },
  {
    id: 'apartment-cleaning',
    title: 'Apartment Cleaning',
    category: 'residential',
    popularBadge: 'Base Rates from $175',
    shortDescription: 'Dedicated standard and deep detailed cleaning tailored for 1, 2, and 3-bedroom apartment layouts.',
    fullDescription:
      'Comprehensive apartment cleaning designed for urban and suburban living across Oakland County & Metro Detroit. Includes standard surface maintenance as well as deep detailed scrubbing options.',
    image: '/assets/ntc/appointmentType-88329054.jpeg',
    startingPrice: '$175.00',
    includes: [
      'Dust accessible surfaces, ceiling fans, and remove cobwebs',
      'Vacuum carpets/rugs, sweep floors, and damp mop hard floors',
      'Kitchen countertops, sink, exterior appliance wipe-down',
      'Complete bathroom sanitation (toilet, vanity, shower/tub)',
      '1 Bedroom Standard: $175 | 1 Bedroom Deep Clean: $300',
      '2 Bedroom Standard: $250 | 2 Bedroom Deep Clean: $385',
      '3 Bedroom Standard: $265 | 3 Bedroom Deep Clean: $475'
    ],
    recommendedAddons: ['Baseboards', 'Cleaning Inside Cabinets', 'Blinds']
  },
  {
    id: 'house-cleaning',
    title: 'House Cleaning',
    category: 'residential',
    popularBadge: 'Base Rates from $250',
    shortDescription: 'Professional house cleaning for 2, 3, 4, and 5-bedroom homes with standard and deep detailed care.',
    fullDescription:
      'Detail-focused house cleaning providing consistent comfort and immaculate presentation. First-time clients are strongly encouraged to begin with our signature Deep Cleaning for thorough buildup elimination.',
    image: '/assets/ntc/upload-e79f976b58d05085cf3793dcf4afa3f3.jpeg',
    startingPrice: '$250.00',
    includes: [
      'Comprehensive room-by-room dusting, vacuuming, and mopping',
      'Kitchen degreasing and sanitary countertop restoration',
      'Complete bathroom scrubbing, tile disinfection, and mirror polishing',
      '2 Bedroom House: Standard $250 | Deep Clean $400',
      '3 Bedroom House: Standard $295 | Deep Clean $475',
      '4 Bedroom House: Standard $375 | Deep Clean $550',
      '5 Bedroom House: Standard $395 | Deep Clean $650'
    ],
    recommendedAddons: ['Squeaky Clean Refrigerator', 'Squeaky Clean Exterior /Interior Stove', 'Baseboards']
  },
  {
    id: 'move-apartment',
    title: 'Move In / Move Out Apartment Cleaning',
    category: 'specialized',
    popularBadge: 'Base Rates from $275',
    shortDescription: 'Thorough turnover cleaning for studio, 1, 2, 3, and 4-bedroom apartments to ensure flawless inspections.',
    fullDescription:
      'Complete turnover sanitation for empty apartments. Deep cleaning of kitchens, appliances, cabinets, full bathroom sanitation, and complete floor care so you can transition with total peace of mind.',
    image: '/assets/ntc/appointmentType-88329860.png',
    startingPrice: '$275.00',
    includes: [
      'Deep cleaning of kitchens (appliances, cabinets, countertops, sinks)',
      'Full bathroom sanitation (toilets, tubs, showers, vanities, mirrors)',
      'Vacuuming all closets, baseboards, tracks, and floors',
      'Studio Move-In/Out: $275',
      '1 BR / 1 Bath Move-In/Out: $325',
      '2 BR / 2 Bath Move-In/Out: $400',
      '3 BR / 2 Bath Move-In/Out: $450',
      '4 BR / 2 Bath Move-In/Out: $500'
    ],
    recommendedAddons: ['Cleaning Inside Cabinets', 'Blinds', 'Full Wall Cleaning']
  },
  {
    id: 'move-house',
    title: 'Move In / Move Out House Cleaning',
    category: 'specialized',
    popularBadge: 'Base Rates from $450',
    shortDescription: 'Detailed property turnover for 2, 3, 4, and 5-bedroom houses for buyers, sellers, and landlords.',
    fullDescription:
      'Heavy-duty move preparation for whole residential properties. We detail interior cabinetry, appliances, sanitizing every square foot so new residents step into an immaculate space.',
    image: '/assets/ntc/upload-a5dbf4a54a7b3acfb4c496e2efd3d9b2.jpeg',
    startingPrice: '$450.00',
    includes: [
      'Deep scrub of kitchen cabinetry, appliances, sinks, and backsplashes',
      'Complete sanitation of all bathrooms, tubs, and showers',
      'Baseboard wiping, closet detailing, and light fixture dusting',
      '2 BR / 2 Bath House Move Clean: $450',
      '3 BR / 2 Bath House Move Clean: $550',
      '4 BR / 2 Bath House Move Clean: $600',
      '5 BR / 2 Bath House Move Clean: $700'
    ],
    recommendedAddons: ['Garage Sweep Out', 'Full Wall Cleaning', 'Declutter']
  },
  {
    id: 'office-daycare',
    title: 'Office / Daycare Cleaning',
    category: 'commercial',
    popularBadge: 'Base Rates from $200',
    shortDescription: 'Reliable, hygienic cleaning packages for small, medium, and large corporate offices and childcare centers.',
    fullDescription:
      'Concierge-grade commercial janitorial care. We disinfect high-touch surfaces, sanitize restrooms, empty trash, and refresh work environments with flexible scheduling that fits your business hours.',
    image: '/assets/ntc/appointmentType-89225358.jpeg',
    startingPrice: '$200.00',
    includes: [
      'Dust desks, furniture, ledges, and reception areas',
      'Wipe and disinfect high-touch areas (door handles, switches, phones)',
      'Empty all office trash bins and replace liners',
      'Restroom deep cleaning, disinfection, and towel restock',
      'Breakroom / kitchenette sanitizing (sink, counter, microwave exterior)',
      'Small Office (1,000–2,000 sq ft): $200',
      'Medium Office (2,000–4,000 sq ft): $300',
      'Large Office (5,000+ sq ft): $400'
    ],
    recommendedAddons: ['Heavy Dust | Build-Up', 'Priority Scheduling/ Same-Day Service']
  },
  {
    id: 'post-construction',
    title: 'Post Construction Cleaning',
    category: 'specialized',
    popularBadge: 'Base Rates from $300',
    shortDescription: 'Detailed post-construction cleanup removing drywall dust, residue, and debris left after renovations.',
    fullDescription:
      'We specialize in detailed post-construction cleaning across Metro Detroit to remove stubborn construction dust, drywall powder, and residue, restoring clarity and cleanliness to your renovated space.',
    image: '/assets/ntc/appointmentType-88329784.png',
    startingPrice: '$300.00',
    includes: [
      'Fine construction dust extraction from ceilings, ledges, and walls',
      'Cabinet interior and exterior wiping to remove sawdust',
      'Window sill, track, and frame detailing',
      'Multi-pass vacuuming and hard floor cleaning',
      '1 Bedroom Post-Construction: $300',
      '2 Bedroom Post-Construction: $400',
      '3 Bedroom Post-Construction: $500'
    ],
    recommendedAddons: ['Full Wall Cleaning', 'Heavy Dust | Build-Up']
  },
  {
    id: 'laundry-service',
    title: 'Laundry Service Pickup & Delivery',
    category: 'specialized',
    popularBadge: '$45 Base Rate',
    shortDescription: 'Convenient wash, dry, and fold laundry service with pickup and drop-off scheduling.',
    fullDescription:
      'Save valuable hours with our professional laundry pickup and drop-off service. Includes quality sorting, gentle washing, low-heat drying, and neat folding ready for your drawers.',
    image: '/assets/ntc/appointmentType-92496530.png',
    startingPrice: '$45.00',
    includes: [
      'Minimum Order: 3 Bags',
      '$1.25 per pound',
      'Neat folding included with every order',
      'Pickup and delivery scheduled directly to your door',
      'Same-day return option available Saturday & Sunday (+ $25)'
    ],
    recommendedAddons: ['Folding Clothes', 'Priority Scheduling/ Same-Day Service']
  },
  {
    id: 'a-la-carte',
    title: 'À La Carte Services',
    category: 'residential',
    popularBadge: 'Custom Targeted Care',
    shortDescription: 'Targeted single-area solutions such as kitchen deep cleans, bathroom restorations, and basement refreshes.',
    fullDescription:
      'Need specific focus areas without booking an entire house package? Choose from our verified à la carte menu for concentrated professional attention.',
    image: '/assets/ntc/appointmentType-thumb-97744193.jpeg',
    startingPrice: '$100.00',
    includes: [
      'Standard Cleaning 1 Kitchen + 2 Bathrooms: $180.00',
      'Heavy Deep Clean 1 Kitchen + 2 Bathrooms: $300.00',
      'Heavy Deep Clean 1 Kitchen + 3 Bathrooms: $350.00',
      'Basement Cleaning & Tidy-Up: $100.00 Deposit',
      'Flexible add-on combinations available'
    ],
    recommendedAddons: ['Squeaky Clean Refrigerator', 'Squeaky Clean Exterior /Interior Stove', 'Declutter']
  }
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'three-rooms-pkg',
    name: '3 Rooms Only Clean',
    tagline: 'Choose any 3 rooms in your space for targeted concierge care',
    startingPrice: 150,
    priceNote: 'Verified flat base rate of $150 (Extra rooms $50 each)',
    isPopular: true,
    features: [
      'Any 3 rooms of your choice (Bedrooms, Living, Kitchen, Bath)',
      'Detailed dusting of surfaces and ledges',
      'Floor vacuuming and damp mopping',
      'Sanitizing light switches, doors, and touch points',
      'Tap to Pay & Square processing accepted',
      'Additional rooms easily added for $50 each'
    ],
    notIncluded: ['Inside refrigerator or stove (unless selected as add-on)'],
    bestFor: 'Focused attention on your most frequently used rooms',
    ctaText: 'Book 3 Rooms ($150)'
  },
  {
    id: 'apartment-pkg',
    name: 'Apartment Cleaning',
    tagline: 'Standard or deep detailed cleaning for 1, 2, and 3-bedroom units',
    startingPrice: 175,
    priceNote: 'Starting at $175 (1 BR) up to $475 (3 BR Deep)',
    features: [
      '1 BR Standard: $175 | 1 BR Deep: $300',
      '2 BR Standard: $250 | 2 BR Deep: $385',
      '3 BR Standard: $265 | 3 BR Deep: $475',
      'Full kitchen, bathroom, bedroom, and living space sanitation',
      'Deep cleans include free fridge, stove, or baseboard choice',
      'Secure lockbox or entry code instructions accepted'
    ],
    bestFor: 'Apartment and condo residents in Oakland County & Metro Detroit',
    ctaText: 'Book Apartment Clean'
  },
  {
    id: 'house-pkg',
    name: 'House Cleaning',
    tagline: 'Standard maintenance or intensive deep cleaning for single-family homes',
    startingPrice: 250,
    priceNote: 'Starting at $250 (2 BR) up to $650 (5 BR Deep)',
    isPopular: true,
    features: [
      '2 BR House: Standard $250 | Deep $400',
      '3 BR House: Standard $295 | Deep $475',
      '4 BR House: Standard $375 | Deep $550',
      '5 BR House: Standard $395 | Deep $650',
      'First-time clients strongly encouraged to start with Deep Cleaning',
      'All Deep Cleanings include FREE fridge, stove, or baseboard choice'
    ],
    bestFor: '2 to 5-bedroom homes requiring detail-focused care',
    ctaText: 'Book House Clean'
  },
  {
    id: 'move-pkg',
    name: 'Move-In / Move-Out',
    tagline: 'Thorough property turnover for vacant apartments and houses',
    startingPrice: 275,
    priceNote: 'Apartments from $275 | Houses from $450',
    features: [
      'Studio to 4 BR Apartments: $275 – $500',
      '2 to 5 BR Houses: $450 – $700',
      'Interior cabinetry and drawers scrubbed and disinfected',
      'Full appliance exterior/interior and range hood wipe-down',
      'Complete bathroom sanitization and scale removal',
      'Ready for walkthroughs, new tenants, or new homeowners'
    ],
    bestFor: 'Tenants moving out, new homeowners, realtors & property managers',
    ctaText: 'Book Move Turnover'
  },
  {
    id: 'commercial-pkg',
    name: 'Office & Daycare Cleaning',
    tagline: 'Concierge-grade commercial janitorial maintenance',
    startingPrice: 200,
    priceNote: 'Small $200 | Medium $300 | Large $400',
    features: [
      'Small Office (1,000–2,000 sq ft): $200',
      'Medium Office (2,000–4,000 sq ft): $300',
      'Large Office (5,000+ sq ft): $400',
      'High-touch surface sanitization (handles, switches, phones)',
      'Restroom deep cleaning and supply restocking',
      'Flexible after-hours or daytime scheduling'
    ],
    bestFor: 'Offices, clinics, studios, and daycare centers',
    ctaText: 'Book Office Cleaning'
  }
];

export const SUBSCRIPTION_PACKAGES = [
  {
    id: 'sub-1br-apt',
    title: '1 Bedroom Apartment Subscriptions',
    description: 'Scheduled recurring maintenance for 1-bedroom apartments to keep your home perpetually fresh.',
    cta: 'Book Subscription'
  },
  {
    id: 'sub-2br-apt',
    title: '2 Bedroom Apartment Subscriptions',
    description: 'Consistent recurring visits tailored to 2-bedroom apartment layouts and busy schedules.',
    cta: 'Book Subscription'
  },
  {
    id: 'sub-2br-house',
    title: '2 Bedroom House Subscriptions',
    description: 'Reliable weekly or biweekly maintenance for 2-bedroom single-family residences.',
    cta: 'Book Subscription'
  },
  {
    id: 'sub-3br-house',
    title: '3 Bedroom House Subscriptions',
    description: 'Concierge-style recurring care for 3-bedroom family homes across Metro Detroit.',
    cta: 'Book Subscription'
  },
  {
    id: 'sub-4br-house',
    title: '4 Bedroom House Subscriptions',
    description: 'Thorough scheduled cleaning for spacious 4-bedroom homes with customized room rotations.',
    cta: 'Book Subscription'
  },
  {
    id: 'sub-5br-house',
    title: '5 Bedroom House Subscriptions',
    description: 'Premium estate recurring cleaning providing complete peace of mind all year round.',
    cta: 'Book Subscription'
  },
  {
    id: 'gift-certs',
    title: 'Gift Certificates',
    description: 'Give the gift of time, comfort, and a sparkling clean space to family, friends, or colleagues.',
    cta: 'Purchase Gift Certificate'
  }
];

export const ADDON_SERVICES: AddonItem[] = [
  {
    id: 'blinds',
    name: 'Blinds Cleaning',
    price: 30,
    description: 'Detailed dusting and wiping of window blinds (60 min).',
    iconName: 'Sparkles'
  },
  {
    id: 'cabinets',
    name: 'Cleaning Inside Cabinets',
    price: 30,
    description: 'Wiping inside shelves, drawers, and cabinet interiors (45 min).',
    iconName: 'FolderArchive'
  },
  {
    id: 'baseboards',
    name: 'Baseboards Hand-Scrub',
    price: 45,
    description: 'Detailed hand wiping and scrubbing of baseboards throughout the space (35 min).',
    iconName: 'Sparkle'
  },
  {
    id: 'fridge',
    name: 'Squeaky Clean Refrigerator',
    price: 40,
    description: 'Emptying shelves, disinfecting compartments, and wiping gaskets (40 min).',
    iconName: 'Refrigerator'
  },
  {
    id: 'stove',
    name: 'Squeaky Clean Exterior / Interior Stove',
    price: 30,
    description: 'Deep degreasing of stove top, burners, and interior oven.',
    iconName: 'Flame'
  },
  {
    id: 'dishes',
    name: 'Squeaky Clean Dishes',
    price: 15,
    description: 'Washing, rinsing, and drying dirty sink dishes (price subject to change based on quantity).',
    iconName: 'Sparkles'
  },
  {
    id: 'closet-organizing',
    name: 'Closet Organizing',
    price: 35,
    description: 'Small size closet tidy and organization per closet (60 min).',
    iconName: 'FolderArchive'
  },
  {
    id: 'declutter',
    name: 'Declutter Service',
    price: 100,
    description: 'Dedicated decluttering and organizing assistance (120 min).',
    iconName: 'Layers'
  },
  {
    id: 'folding-clothes',
    name: 'Folding Clothes (1 Bag Only)',
    price: 25,
    description: 'Neat folding of freshly laundered clothing (1 bag only, 45 min).',
    iconName: 'Shirt'
  },
  {
    id: 'wall-cleaning',
    name: 'Full Wall Cleaning (Per Room)',
    price: 15,
    description: 'Spot wiping and hand cleaning of walls per room (30 min).',
    iconName: 'Sparkles'
  },
  {
    id: 'garage-sweep',
    name: 'Garage Sweep Out',
    price: 25,
    description: 'Clearing and sweeping out debris and dust from garage floors (25 min).',
    iconName: 'Home'
  },
  {
    id: 'heavy-dust',
    name: 'Heavy Dust | Build-Up',
    price: 35,
    description: 'Additional treatment for neglected surfaces and high dust accumulation (60 min).',
    iconName: 'Sparkles'
  },
  {
    id: 'pet-fee',
    name: 'Pet Fee',
    price: 15,
    description: 'Standard pet accommodation fee for homes with animal companions.',
    iconName: 'Dog'
  },
  {
    id: 'pet-hair-removal',
    name: 'Pet Hair Removal',
    price: 15,
    description: 'Must be added for non-allergenic animals to ensure thorough hair extraction (25 min).',
    iconName: 'Dog'
  },
  {
    id: 'stairs',
    name: 'Stair Cleaning Per Staircase',
    price: 15,
    description: 'Vacuuming, sweeping, and hand detailing per individual flight of stairs (30 min).',
    iconName: 'Layers'
  },
  {
    id: 'priority-scheduling',
    name: 'Priority Scheduling / Same-Day Service',
    price: 50,
    description: 'Expedited booking dispatch for rush or same-day cleaning requirements.',
    iconName: 'Clock'
  },
  {
    id: 'extra-room-1',
    name: '1 Extra Room (Bath, Foyer, Sunroom, Bedroom)',
    price: 25,
    description: 'Add 1 additional room to your cleaning appointment (45 min).',
    iconName: 'Home'
  },
  {
    id: 'extra-room-2',
    name: '2 Extra Rooms',
    price: 50,
    description: 'Add 2 additional rooms to your cleaning appointment (45 min).',
    iconName: 'Home'
  },
  {
    id: 'extra-room-3',
    name: '3 Extra Rooms',
    price: 75,
    description: 'Add 3 additional rooms to your cleaning appointment (45 min).',
    iconName: 'Home'
  }
];

export const SERVICE_CITIES: ServiceAreaCity[] = [
  {
    name: 'Oakland County',
    county: 'Michigan',
    driveTime: 'Primary Hub',
    popularServices: 'Residential House Cleaning, Apartment Deep Clean, Move-In/Out Turnaround',
    zipCodes: ['48301', '48302', '48304', '48306', '48307', '48309', '48326', '48331', '48334', '48335', '48340', '48341', '48375', '48377', '48067', '48073', '48075', '48084']
  },
  {
    name: 'Metro Detroit Area',
    county: 'Michigan',
    driveTime: 'Serving Region',
    popularServices: '3 Rooms Professional Clean, Office & Daycare Cleaning, Laundry Pickup',
    zipCodes: ['48201', '48202', '48226', '48243', '48207', '48214', '48221', '48030', '48069', '48220']
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: '1',
    quote:
      'Now That’s Clean lives up to its name completely. Booking was seamless, their team was respectful of our home, and the base rates were completely transparent. Coming home to freshly cleaned rooms was such a relief.',
    author: 'Satisfied Residential Client',
    neighborhood: 'Oakland County, MI',
    serviceType: 'House Cleaning & Refrigerator Choice',
    date: 'Verified Client'
  },
  {
    id: '2',
    quote:
      'The 3 Rooms Professionally Cleaned package for $150 was exactly what we needed before hosting family. They paid close attention to high-touch areas and the kitchen was spotless.',
    author: 'Metro Detroit Resident',
    neighborhood: 'Metro Detroit Area',
    serviceType: '3 Rooms Only Professionally Cleaned',
    date: 'Verified Client'
  },
  {
    id: '3',
    quote:
      'We booked their Move-Out service for our 2-bedroom apartment. The landlord walked through with zero complaints. Tap to Pay with Square made checkout effortless. Highly recommend NTC!',
    author: 'Apartment Move-Out Client',
    neighborhood: 'Oakland County, MI',
    serviceType: 'Move Out Apartment Cleaning',
    date: 'Verified Client'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    category: 'service',
    question: 'Why are first-time clients encouraged to start with a Deep Cleaning?',
    answer:
      'To properly bring a home or business to the Now That’s Clean standard, all first-time clients are strongly encouraged to begin with a Deep Cleaning, especially if the space has not been professionally maintained consistently. Deep Cleaning gives the team additional time and attention to buildup, high-touch areas, neglected surfaces, and areas requiring more detailed attention. After the initial deep clean, clients easily transition into recurring maintenance cleaning based on their needs. If the team determines that a Deep Cleaning is necessary instead of the Standard Cleaning originally booked, the customer will be contacted before service begins.'
  },
  {
    category: 'service',
    question: 'What is the special benefit included with all Deep Cleanings?',
    answer:
      'All Deep Cleanings come with your FREE choice of: 1) Inside refrigerator cleaning, 2) Baseboards cleaning, or 3) Inside stove cleaning. Simply specify your preferred complimentary service during booking.'
  },
  {
    category: 'pricing',
    question: 'What payment methods do you accept?',
    answer:
      'We accept Tap to Pay and major credit/debit cards. All transactions are securely processed through Square. Please note that cash is not accepted.'
  },
  {
    category: 'booking',
    question: 'Do I need to be present during the cleaning appointment?',
    answer:
      'No, customers do not need to be present during the appointment as long as secure entry instructions (such as a lockbox code, smart door lock, or building concierge) have been arranged in advance.'
  },
  {
    category: 'process',
    question: 'How should I prepare for my cleaning service?',
    answer:
      'Before our cleaning team arrives, please: 1) Confirm that your contact and property information is accurate, 2) Remove excessive floor clutter and bath mats, 3) Secure all pets before the team enters the property, and 4) Ensure working electricity and access to hot water.'
  },
  {
    category: 'booking',
    question: 'What is your cancellation policy?',
    answer:
      'We understand that plans can change. However, because appointment times are reserved specifically for each client, same-day cancellations are subject to a 50% service fee. The applicable fee will be charged at the time of cancellation.'
  },
  {
    category: 'pricing',
    question: 'Are there any discount codes or client promotions available?',
    answer:
      'Yes! New clients can use code FIRST TIME for $20 to $30 OFF. Existing clients can use code NTC for $10 OFF. And during Customer Appreciation Months (November & December), use code NOVDEC for 15% OFF services.'
  },
  {
    category: 'service',
    question: 'What service areas does Now That’s Clean cover?',
    answer:
      'We proudly service Oakland County, Michigan and the surrounding Metro Detroit Area for all residential, commercial, move-in/out, and laundry pickup needs.'
  },
  {
    category: 'service',
    question: 'How does your Laundry Service Pickup work?',
    answer:
      'Our laundry service has a minimum order of 3 bags at $1.25 per pound, with neat folding included. Pickup and return are scheduled right to your door, with same-day return available on Saturday & Sunday for an additional $25.'
  },
  {
    category: 'booking',
    question: 'How do I contact the Concierge Line directly?',
    answer:
      'You can call our dedicated Concierge Line directly at 346-491-1010 for questions, custom service recommendations, or booking assistance.'
  }
];
