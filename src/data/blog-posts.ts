import type { BlogPost } from './content-types';

export const blogPosts: BlogPost[] = [
  {
    slug: '7-daily-habits-that-protect-your-back',
    title: '7 Daily Habits That Protect Your Back',
    excerpt: 'Small changes to how you sit, move, lift and rest can help your back feel better over time. Here are seven simple habits to try.',
    metaDescription: 'Seven simple daily habits that may help protect your back, from moving often to lifting with care and sleeping well.',
    date: '2026-10-20',
    readTime: '5 min',
    category: 'Healthy habits',
    image: '/images/blog/7-daily-habits-that-protect-your-back.jpg',
    imageAlt: 'A woman in a warrior yoga pose on a blue mat in a bright living room',
    position: '50% 50%',
    intro: 'Most people have back pain at some point. The good news is that many everyday choices can make your back more comfortable. None of these habits is a cure, and results vary from person to person. But small steps, done often, can add up. Here are seven habits many people find helpful.',
    body: [
      { type: 'h2', text: '1. Move often' },
      { type: 'p', text: 'Sitting still for a long time can leave your back stiff and sore. Try to stand up, walk around, or stretch every 30 to 60 minutes. Set a reminder on your phone if it helps. A short walk to get water counts.' },
      { type: 'h2', text: '2. Set up your seat and screen' },
      { type: 'p', text: 'A good setup takes strain off your back and neck. You do not need fancy gear. A few simple changes can help.' },
      { type: 'ul', items: [
        'Keep your feet flat on the floor.',
        'Sit so your lower back is supported, with a small pillow or rolled towel if needed.',
        'Place your screen at eye level so you are not looking down for hours.',
        'Keep your keyboard close so your arms can rest at your sides.'
      ] },
      { type: 'h2', text: '3. Lift with care' },
      { type: 'p', text: 'When you pick something up, bend your knees and keep the object close to your body. Try not to twist while you lift. Turn your whole body with your feet instead. If something is too heavy, ask for help or use a cart.' },
      { type: 'h2', text: '4. Build a strong core and stay active' },
      { type: 'p', text: 'The muscles in your belly, hips and back work as a team to support your spine. Walking, swimming, gentle stretching and core exercises are common choices. Start slowly and build up. If you have pain, a physical therapist or your doctor can suggest safe exercises for you.' },
      { type: 'h2', text: '5. Sleep in a comfortable position' },
      { type: 'p', text: 'There is no single best way to sleep. Many people with back pain feel better with a pillow between the knees when lying on their side, or a pillow under the knees when lying on their back. A mattress that feels supportive to you is a good guide.' },
      { type: 'h2', text: '6 and 7. Care for your whole health and listen to your body' },
      { type: 'p', text: 'Your back is part of your whole body. Staying at a healthy weight, not smoking, managing stress and getting enough rest can all play a role in how your back feels. Extra stress can make muscles tense, so find calming activities that work for you, such as walking, music or deep breathing.' },
      { type: 'p', text: 'Also pay attention to what your body tells you. Mild soreness after new activity is common. But pain that keeps getting worse, or that does not improve after a few days, deserves attention. Do not push through sharp pain.' },
      { type: 'p', text: 'Pick one or two habits to start with instead of changing everything at once. Link a new habit to something you already do, like stretching while your coffee brews or walking after lunch. Write down how you feel after a week or two. Small wins can keep you going. If a habit makes your pain worse, stop and ask your doctor or a physical therapist for advice.' },
      { type: 'p', text: 'It also helps to be kind to yourself. Pain can go up and down, and a flare-up does not mean you did something wrong. What matters most is a steady routine over time, with help from your care team when you need it.' },
      { type: 'p', text: 'Habits work best when you start small. Pick one or two to begin with, and link them to something you already do, like stretching while your coffee brews or walking after lunch.' },
      { type: 'callout', title: 'When to call your doctor', text: 'Seek medical care right away if back pain comes with weakness in a leg, numbness in the groin or inner thighs, trouble controlling your bladder or bowels, fever, or pain after a fall or injury. Call 911 or go to the nearest emergency room for these symptoms.' },
      { type: 'p', text: 'You can also talk to your doctor if back pain lasts more than a few weeks, wakes you at night, or limits your daily life. Together you can look at what may be causing it and which options might help you.' }
    ],
    takeaways: [
      'Move and change positions often during the day.',
      'Lift with your knees, keep loads close, and avoid twisting.',
      'Gentle exercise, good sleep and healthy habits support your back.',
      'Do not ignore warning signs such as leg weakness or loss of bladder control.',
      'Results vary, so talk to your doctor about a plan that fits you.'
    ],
    faqs: [
      {
        q: 'Can these habits get rid of my back pain?',
        a: 'They may help ease strain and support your back, but they are not a cure. Results vary from person to person. If your pain continues, talk to your doctor.'
      },
      {
        q: 'Is it better to rest or stay active when my back hurts?',
        a: 'For many people, gentle movement is helpful, while long bed rest is not. What is right for you depends on the cause of your pain, so ask your doctor for advice.'
      },
      {
        q: 'When should I see a pain specialist?',
        a: 'Consider a visit if pain lasts longer than a few weeks, keeps coming back, or gets in the way of work, sleep or daily tasks.'
      }
    ],
    relatedServices: ['epidural-steroid-injections', 'facet-joint-injections']
  },
  {
    slug: 'chronic-migraine-and-botox-how-it-works',
    title: 'Chronic Migraine and Botox: How It Works',
    excerpt: 'Botox is one option some people use to help prevent chronic migraine. Learn how the treatment works, what a visit is like, and what to ask your doctor.',
    metaDescription: 'Learn how Botox may help prevent chronic migraine, what treatment visits involve, and possible side effects to discuss with your doctor.',
    date: '2026-09-24',
    readTime: '5 min',
    category: 'Headache & nerves',
    image: '/images/blog/chronic-migraine-and-botox-how-it-works.jpg',
    imageAlt: 'A woman with her eyes closed and her hand on her temple, showing headache pain',
    position: '50% 50%',
    intro: 'Living with frequent migraine can affect work, family and sleep. Botox is one treatment that some people with chronic migraine use to help reduce how often headaches happen. It does not work for everyone, and it is not a cure. This article explains the basics in plain language.',
    body: [
      { type: 'h2', text: 'What is chronic migraine?' },
      { type: 'p', text: 'Doctors often describe chronic migraine as headaches on 15 or more days each month, with migraine features on at least some of those days, lasting for more than three months. Symptoms can include throbbing pain, nausea, and sensitivity to light and sound. Your doctor will decide if this term fits you.' },
      { type: 'h2', text: 'How does Botox work for migraine?' },
      { type: 'p', text: 'Botox is a purified form of a protein called botulinum toxin. In the muscles, it can relax tight fibers. For migraine prevention, the medicine is placed near small nerves in the head and neck. Experts believe it may calm the signals that carry pain, but the full picture is still being studied. It is used to help prevent headaches, not to stop one that has already started.' },
      { type: 'h2', text: 'What happens at a treatment visit?' },
      { type: 'p', text: 'Treatment is done in the office and usually takes a short time. Your provider uses a very thin needle to place small amounts of medicine in set spots around the forehead, temples, back of the head, neck and shoulders. Many people describe it as a series of quick pinches.' },
      { type: 'ol', items: [
        'You talk with your provider about your headache history and goals.',
        'The skin is cleaned and the injection spots are chosen.',
        'The medicine is injected in several small doses.',
        'You can usually go home right after and return to normal activity, unless your provider tells you otherwise.'
      ] },
      { type: 'h2', text: 'How long until it may help?' },
      { type: 'p', text: 'Botox does not work right away. Many people need more than one round before they can tell if it is helping. Treatment is often repeated about every 12 weeks. Your doctor may ask you to keep a headache diary so you can both see whether the number or strength of your headaches changes. Some people notice a clear benefit, some a small one, and some none.' },
      { type: 'h2', text: 'Possible side effects' },
      { type: 'p', text: 'Most side effects are mild and short. Others are less common but important to know about.' },
      { type: 'ul', items: [
        'Pain, soreness or bruising where the needle went in',
        'Neck pain or stiffness',
        'A temporary droopy eyelid or eyebrow',
        'Headache that feels worse for a short time',
        'Rarely, trouble swallowing or breathing, which needs urgent medical care'
      ] },
      { type: 'h2', text: 'Questions to bring to your visit' },
      { type: 'p', text: 'It helps to come prepared. Think about how many headache days you have each month, what medicines you have tried, and how migraine affects your daily life. You may want to ask:' },
      { type: 'ul', items: [
        'Is Botox a good fit for my type of headaches?',
        'What other prevention options do I have?',
        'How will we measure if it is helping?',
        'What side effects should I watch for?'
      ] },
      { type: 'p', text: 'Insurance rules for Botox can differ by plan. Our office can help you understand the steps, but you may want to check your coverage too.' },
      { type: 'p', text: 'Botox is also not the only way to prevent migraine. Daily medicines, sleep routines, regular meals, stress care and trigger tracking can all be part of a plan. Many people use more than one approach, and your doctor can help you build a plan that fits your life.' },
      { type: 'callout', title: 'Is it right for you?', text: 'Botox is not safe or suitable for everyone. Tell your doctor about all your medicines, any muscle or nerve conditions, and whether you are pregnant or planning to be. Your doctor can explain the benefits and risks for your case.' },
      { type: 'p', text: 'Botox is just one tool. Many people also use daily medicines, lifestyle changes, stress care and trigger tracking. Your doctor may suggest a mix of these. If you have headaches that are new, sudden and severe, or come with weakness, confusion or vision loss, seek emergency care right away.' }
    ],
    takeaways: [
      'Botox is used to help prevent chronic migraine, not to treat a headache already in progress.',
      'Treatment involves several small injections around the head and neck.',
      'It can take more than one round to know if it helps, and results vary.',
      'Side effects are usually mild, but tell your doctor about your health history first.',
      'Ask your doctor whether it fits your care plan.'
    ],
    faqs: [
      {
        q: 'Will Botox cure my migraines?',
        a: 'No. It is meant to help reduce how often headaches occur for some people. It is not a cure, and results vary.'
      },
      {
        q: 'Does the treatment hurt?',
        a: 'Most people feel quick pinches or pressure. The needles are very thin, and the visit is short.'
      },
      {
        q: 'How often is it repeated?',
        a: 'It is often repeated about every 12 weeks, but your doctor will set a plan based on how you respond.'
      }
    ],
    relatedServices: ['botox-for-pain']
  },
  {
    slug: 'radiofrequency-ablation-for-long-lasting-back-or-neck-pain',
    title: 'Radiofrequency Ablation for Long-Lasting Back or Neck Pain',
    excerpt: 'Radiofrequency ablation uses gentle heat to quiet pain signals from certain nerves. See who may be a candidate and what recovery can look like.',
    metaDescription: 'Learn how radiofrequency ablation works for chronic back or neck pain, who may qualify, what to expect, and possible risks.',
    date: '2026-09-01',
    readTime: '5 min',
    category: 'Procedures',
    image: '/images/blog/radiofrequency-ablation-for-long-lasting-back-or-neck-pain.jpg',
    imageAlt: 'A doctor in a white coat using a spine model to explain a condition to an older patient',
    position: '50% 50%',
    intro: 'If back or neck pain keeps coming back, you may be looking for options that last longer than a single injection. Radiofrequency ablation, often called RFA, is a procedure that aims to reduce pain by calming certain small nerves. It is not right for everyone, and results vary. Here is what to know.',
    body: [
      { type: 'h2', text: 'What is radiofrequency ablation?' },
      { type: 'p', text: 'RFA uses energy from radio waves to create a small amount of heat at the tip of a thin needle. The heat is placed next to a nerve that carries pain signals. The goal is to make that nerve less able to send pain messages to the brain. The nerve can grow back over time, so relief is not always permanent.' },
      { type: 'h2', text: 'Who might be a candidate?' },
      { type: 'p', text: 'RFA is most often used for pain thought to come from the small joints of the spine, called facet joints. Doctors usually want to confirm that source first. A common step is a diagnostic test, such as a medial branch block, which numbs the nerves for a short time. If your pain eases clearly during that test, RFA may be an option to discuss.' },
      { type: 'p', text: 'It may also be considered for pain in other areas, depending on your exam and history. Your doctor will review your imaging, your symptoms, and what you have already tried, such as therapy and medicine.' },
      { type: 'h2', text: 'What happens during the procedure?' },
      { type: 'ol', items: [
        'You lie on a table, and the skin is cleaned and numbed.',
        'Using X-ray guidance, your doctor places thin needles near the target nerves.',
        'A small test may be done to be sure the needle is in a safe spot.',
        'The radiofrequency energy is applied for a short time at each spot.',
        'The needles are removed and a small bandage is placed.'
      ] },
      { type: 'p', text: 'Many people are awake and comfortable, and some receive light sedation. The visit often lasts less than an hour, plus time for check-in and rest. Your office will tell you if you need a ride home.' },
      { type: 'p', text: 'What is recovery like? It is common to have soreness, a sunburn-like feeling or mild numbness near the treated area for a few days to a couple of weeks. Some people notice their original pain feels a bit worse before it gets better. Your care team will explain activity limits and what to watch for.' },
      { type: 'h2', text: 'How long can relief last?' },
      { type: 'p', text: 'There is no promise of how long relief will last. Some people feel better for several months or longer, while others get little or no benefit. If the nerve grows back and pain returns, the procedure may sometimes be repeated. Pairing RFA with exercise and physical therapy may help you stay active.' },
      { type: 'h2', text: 'Risks to know about' },
      { type: 'p', text: 'Most side effects are mild, but any procedure has risks. These can include pain at the site, bruising, infection, bleeding, temporary numbness or, rarely, nerve injury. Tell your doctor if you take blood thinners, have an infection, or are pregnant.' },
      { type: 'h2', text: 'Getting ready and aftercare' },
      { type: 'p', text: 'Your office will tell you how to prepare. This may include when to stop eating, whether to hold certain medicines, and whether you need a driver. Never stop a prescribed medicine unless your doctor says so. After the procedure, many people do light activity the next day, but your team will give you the exact guidance for your case. Keep any follow-up visit so you can talk about how you are doing and what comes next.' },
      { type: 'p', text: 'Because RFA works on pain signals and not on the cause of wear in the spine, staying active and building strength often remain important for the long run.' },
      { type: 'p', text: 'Be sure to tell your care team about any changes in how you feel after the procedure. Honest feedback helps your doctor judge whether it helped and what to do next.' },
      { type: 'callout', title: 'Ask your doctor', text: 'Ask if a diagnostic block is needed first, how many treatment areas are planned, what relief is realistic for you, and what other options you have.' }
    ],
    takeaways: [
      'RFA uses heat from radio waves to calm pain signals from certain nerves.',
      'A diagnostic nerve block is often done first to see if you may benefit.',
      'Relief varies and may last months or longer for some people, but is not guaranteed.',
      'Soreness for a few days is common, and serious risks are rare but possible.',
      'Talk to your doctor about whether RFA fits your situation.'
    ],
    faqs: [
      {
        q: 'Is RFA surgery?',
        a: 'It is a minimally invasive procedure done with needles, not a large cut. You usually go home the same day.'
      },
      {
        q: 'Will the pain come back?',
        a: 'It may. Nerves can regrow, and pain can return after some time. Your doctor can talk with you about repeat treatment if it helped.'
      },
      {
        q: 'Do I need a diagnostic block first?',
        a: 'Often yes, because it helps show whether the targeted nerves are the source of your pain. Your doctor will decide what is right for you.'
      }
    ],
    relatedServices: ['radiofrequency-ablation', 'facet-joint-injections', 'intracept-procedure']
  },
  {
    slug: 'sciatica-vs-si-joint-pain-how-to-tell',
    title: 'Sciatica vs. SI Joint Pain: How to Tell',
    excerpt: 'Sciatica and SI joint pain can both cause pain in the buttock and leg. Learn how they differ and why an exam matters.',
    metaDescription: 'Compare sciatica and sacroiliac joint pain, including common signs, causes, and how doctors tell them apart.',
    date: '2026-08-12',
    readTime: '5 min',
    category: 'Spine & back',
    image: '/images/blog/sciatica-vs-si-joint-pain-how-to-tell.jpg',
    imageAlt: 'A man outdoors holding his lower back and hip in pain',
    position: '50% 50%',
    intro: 'Pain in the lower back, buttock or leg is common, and it can be hard to know where it comes from. Two frequent causes are sciatica and sacroiliac (SI) joint pain. They can feel alike, but they are not the same problem. This guide shares general signs, but only an exam can tell you what is going on.',
    body: [
      { type: 'h2', text: 'What is sciatica?' },
      { type: 'p', text: 'Sciatica is pain that follows the path of the sciatic nerve. This nerve starts in the lower back, runs through the buttock, and goes down the back of the leg. Sciatica usually happens when something irritates or presses on a nerve root in the spine, such as a disc problem or a narrowed space around the nerve.' },
      { type: 'h2', text: 'What is SI joint pain?' },
      { type: 'p', text: 'The SI joints sit where the base of your spine meets your pelvis, one on each side. They help absorb force between your upper body and legs. These joints can become sore from wear, injury, pregnancy, arthritis or uneven stress. Pain here is often felt in the low back and buttock.' },
      { type: 'h2', text: 'Common signs: how they may differ' },
      { type: 'ul', items: [
        'Sciatica often feels sharp, burning or electric, and can travel below the knee, sometimes into the foot.',
        'Sciatica may come with tingling, numbness or leg weakness.',
        'SI joint pain is often a dull ache or a sharp pain on one side of the low back or buttock.',
        'SI joint pain may reach the groin or thigh, but usually does not go past the knee.',
        'SI joint pain can flare when you climb stairs, stand up from a chair, roll over in bed, or stand on one leg.'
      ] },
      { type: 'p', text: 'These patterns are only a guide. Some people have both conditions, and some features overlap. That is why the symptoms alone cannot give a clear answer.' },
      { type: 'h2', text: 'How doctors tell them apart' },
      { type: 'p', text: 'Your doctor will ask where the pain is, what makes it better or worse, and how long it has been present. A physical exam may include moving your hip and spine, testing strength and reflexes, and pressing on certain spots. Imaging, such as an MRI, may be used to look for nerve pressure. In some cases, a numbing injection into the SI joint helps confirm whether the joint is the source. If the pain eases, that is a clue.' },
      { type: 'h2', text: 'Treatment options' },
      { type: 'p', text: 'Many people start with simple care. Options depend on the cause and may include:' },
      { type: 'ul', items: [
        'Activity changes and gentle movement',
        'Physical therapy and targeted exercise',
        'Over-the-counter or prescription medicine, as advised by your doctor',
        'Injections, such as an epidural steroid injection for nerve irritation or an SI joint injection for joint pain',
        'Other procedures, if pain persists and your doctor feels they are appropriate'
      ] },
      { type: 'p', text: 'Results vary, and not every option is right for every person. Your doctor can help you weigh the benefits and risks.' },
      { type: 'h2', text: 'Why getting the right answer matters' },
      { type: 'p', text: 'Treatment works best when it targets the true source of pain. A treatment meant for a pinched nerve may not help pain from the SI joint, and the reverse is also true. If a plan is not helping after a fair try, tell your doctor. It may be time to look again, run another test or try a different approach.' },
      { type: 'p', text: 'You can help by keeping a simple note of when your pain starts, where it goes, and what you were doing. Bring it to your visit. Small details, like pain when climbing stairs or sitting for long periods, can give your doctor useful clues.' },
      { type: 'p', text: 'Be patient with the process. Finding the cause can take more than one visit, and that is normal.' },
      { type: 'callout', title: 'Get urgent help if', text: 'You have new weakness in a leg, numbness in the groin or inner thighs, or trouble controlling your bladder or bowels. These can be signs of a serious problem and need care right away.' }
    ],
    takeaways: [
      'Sciatica is nerve pain that often travels down the leg; SI joint pain is usually felt in the low back and buttock.',
      'The two can overlap, and some people have both.',
      'An exam, and sometimes imaging or a diagnostic injection, helps find the source.',
      'Treatment ranges from exercise and therapy to injections, and results vary.',
      'See a doctor if pain lasts or if you have warning signs.'
    ],
    faqs: [
      {
        q: 'Can SI joint pain cause leg pain?',
        a: 'Yes, it can refer pain to the buttock, groin or upper thigh. It usually does not travel below the knee, but each person is different.'
      },
      {
        q: 'Do I need an MRI to find out?',
        a: 'Not always. Your doctor will decide based on your symptoms and exam whether imaging would help.'
      },
      {
        q: 'Will it go away on its own?',
        a: 'Many cases improve with time and simple care, but some do not. Talk to your doctor if your pain lasts more than a few weeks.'
      }
    ],
    relatedServices: ['epidural-steroid-injections', 'si-joint-injections']
  },
  {
    slug: 'facet-joint-pain-signs-and-treatment-options',
    title: 'Facet Joint Pain: Signs and Treatment Options',
    excerpt: 'Facet joints help your spine bend and twist, and they can become a source of back or neck pain. Learn the common signs and how doctors approach care.',
    metaDescription: 'Learn about facet joint pain in the neck and back, common signs, how it is diagnosed, and treatment options from exercise to injections.',
    date: '2026-07-22',
    readTime: '5 min',
    category: 'Spine & back',
    image: '/images/blog/facet-joint-pain-signs-and-treatment-options.jpg',
    imageAlt: 'A doctor pointing a pen at a spine model while talking with a patient',
    position: '50% 50%',
    intro: 'Your spine has many small joints that let you bend, twist and stand tall. When these joints become irritated or worn, they can cause back or neck pain. These are called facet joints. This article explains the signs of facet joint pain and the ways it is often treated.',
    body: [
      { type: 'h2', text: 'What are facet joints?' },
      { type: 'p', text: 'Facet joints are small paired joints on the back of each bone in your spine. They are covered with smooth cartilage and sit inside a soft capsule. Along with the discs, they help guide and limit how your spine moves. They are found in the neck, mid-back and lower back.' },
      { type: 'h2', text: 'What causes facet joint pain?' },
      { type: 'p', text: 'Over time, cartilage can wear down, much like in other joints. This is a common part of aging. Injuries, such as whiplash, can also strain the joints. Extra stress from posture, repeated motion or changes in the discs may play a role too. Not everyone with wear on an X-ray has pain, so the cause is not always clear.' },
      { type: 'h2', text: 'Common signs' },
      { type: 'p', text: 'Signs differ from person to person. Some that are often linked to facet joint pain include:' },
      { type: 'ul', items: [
        'A dull, achy pain in the neck or low back, often on one or both sides',
        'Pain that worsens when you lean back, twist, or stand for long periods',
        'Stiffness, especially in the morning or after sitting',
        'Pain that spreads to the shoulders, buttocks or thighs, but usually not far below the knee',
        'Tenderness when pressing near the spine'
      ] },
      { type: 'p', text: 'Because other problems can feel similar, such as muscle strain or a pinched nerve, an exam is important.' },
      { type: 'h2', text: 'How is it diagnosed?' },
      { type: 'p', text: 'Your doctor will review your history and examine your movement and posture. Imaging, such as X-ray or MRI, may be used to look at the spine. Imaging alone cannot prove the joints are the source of pain. Sometimes a doctor will use a small numbing injection near the joint or its nerves to see if the pain eases for a while. That can help confirm the diagnosis.' },
      { type: 'h2', text: 'Treatment options' },
      { type: 'p', text: 'Many people improve with conservative care first. Your plan will depend on your symptoms and goals.' },
      { type: 'ul', items: [
        'Rest from aggravating activity, then a gradual return to movement',
        'Physical therapy, stretching and core strengthening',
        'Heat or cold, and medicine as advised by your doctor',
        'Facet joint injections, which place medicine in or near the joint to help calm irritation',
        'Radiofrequency ablation, which uses heat to quiet the small nerves that carry pain from the joint, for those who respond well to a diagnostic block'
      ] },
      { type: 'p', text: 'Injections and procedures are usually considered when pain continues despite other care. They may bring short or longer relief for some people, but results vary. They are often used to help you take part in therapy and daily life.' },
      { type: 'h2', text: 'Everyday tips that may help' },
      { type: 'p', text: 'Along with medical care, daily habits can matter. Try to change positions often and avoid staying in one posture for too long. Gentle stretching and walking are common choices. Some people feel better using a supportive chair or a small pillow behind the lower back. Use heat or ice for short periods if they feel good to you. If something increases your pain, ease off and tell your care team.' },
      { type: 'p', text: 'Healthy habits such as staying at a comfortable weight and not smoking may also support your spine over time, although results differ for each person.' },
      { type: 'p', text: 'Remember that pain is complex. Sleep, stress and mood can all affect how strongly you feel it, so a good plan looks at the whole picture.' },
      { type: 'callout', title: 'Talk to your doctor', text: 'Contact your doctor if neck or back pain lasts more than a few weeks, keeps returning, or limits your sleep or work. Seek urgent care if you have leg weakness, loss of bladder or bowel control, fever, or pain after a serious injury.' }
    ],
    takeaways: [
      'Facet joints are small spine joints that can become irritated or worn.',
      'Pain is often a dull ache that worsens with leaning back or twisting.',
      'Diagnosis uses an exam, sometimes imaging and sometimes a numbing test.',
      'Treatment ranges from therapy and exercise to injections and nerve ablation.',
      'Results vary, so work with your doctor on a plan.'
    ],
    faqs: [
      {
        q: 'Can facet joint pain be seen on an X-ray?',
        a: 'Wear may show on imaging, but imaging cannot always show whether the joint is causing your pain. Many people have changes with no symptoms.'
      },
      {
        q: 'Are facet joint injections painful?',
        a: 'The skin is numbed first. Most people feel pressure or a brief pinch. Your doctor will explain what to expect.'
      },
      {
        q: 'Will I need surgery?',
        a: 'Most people with facet joint pain do not. Many find help from non-surgical care. Your doctor can talk about all options.'
      }
    ],
    relatedServices: ['facet-joint-injections', 'radiofrequency-ablation']
  },
  {
    slug: 'epidural-steroid-injection-what-to-expect',
    title: 'Epidural Steroid Injection: What to Expect',
    excerpt: 'An epidural steroid injection places medicine near irritated spinal nerves to help ease pain. Here is a simple guide to the day of your procedure.',
    metaDescription: 'A plain-language guide to epidural steroid injections, including how they work, what happens during the visit, recovery, and possible risks.',
    date: '2026-07-06',
    readTime: '5 min',
    category: 'Procedures',
    image: '/images/blog/epidural-steroid-injection-what-to-expect.jpg',
    imageAlt: 'A doctor in surgical gear beside a patient and an X-ray C-arm in a procedure room',
    position: '50% 50%',
    intro: 'If back, neck or leg pain comes from an irritated nerve, your doctor may talk with you about an epidural steroid injection. Knowing what happens can make the day feel less stressful. This article explains the steps in simple terms. Results vary, and your doctor will help decide if this option fits you.',
    body: [
      { type: 'h2', text: 'What is an epidural steroid injection?' },
      { type: 'p', text: 'An epidural steroid injection places medicine into the epidural space, the area around the spinal nerves. The medicine is usually a steroid, which can lower swelling and irritation, and often a numbing medicine. The aim is to ease pain from conditions such as a herniated disc, spinal stenosis or sciatica. It does not fix the underlying cause, but it may give a window of relief so you can be more active.' },
      { type: 'h2', text: 'Before the procedure' },
      { type: 'p', text: 'Your office will give you instructions. In general, you will be asked to share your medical history, allergies and all medicines. Blood thinners may need special planning, so never stop a medicine on your own. Tell your doctor if you have an infection, a fever, diabetes or you may be pregnant. You may be told whether to eat and whether you need a driver.' },
      { type: 'h2', text: 'During the procedure' },
      { type: 'ol', items: [
        'You lie on your stomach or side on an X-ray table.',
        'The skin is cleaned and numbed with a small needle.',
        'Using X-ray guidance, your doctor guides a thin needle to the right spot.',
        'A small amount of contrast dye may be used to check the position.',
        'The medicine is injected, and the needle is removed.'
      ] },
      { type: 'p', text: 'You may feel pressure, warmth or a brief pinch. The injection itself often takes only a few minutes, and the whole visit is usually under an hour. Tell your team right away if you feel sharp pain, tingling or anything unusual.' },
      { type: 'h2', text: 'After the procedure' },
      { type: 'p', text: 'You will rest for a short time and then go home. Some people feel sore at the site, and your legs may feel numb or heavy for a few hours from the numbing medicine. Take it easy for the rest of the day and follow the care instructions you are given. Most people return to normal activity within a day or two.' },
      { type: 'h2', text: 'How long does relief last?' },
      { type: 'p', text: 'The steroid may take a few days to start working. Some people feel better for weeks or months, some get partial relief, and some do not feel much change. Your doctor may suggest pairing the injection with physical therapy and exercise. The number of injections you might have is a decision to make with your doctor.' },
      { type: 'h2', text: 'Possible risks and questions to ask' },
      { type: 'p', text: 'Serious problems are uncommon, but no procedure is risk free. Possible side effects include pain at the site, a headache, temporary higher blood sugar, flushing or trouble sleeping. Rare risks include infection, bleeding, nerve injury or an allergic reaction. Your doctor will go over these with you before you decide.' },
      { type: 'p', text: 'Your visit is a good time to speak up. Consider asking how the injection is meant to help your type of pain, what other options exist, and how your care team will know if it worked. It can also help to ask what activity is okay afterward and when your follow-up will be.' },
      { type: 'p', text: 'If you feel nervous, say so. The team can walk you through each step, and they want you to feel informed. You are always free to ask questions before you agree to any procedure.' },
      { type: 'p', text: 'Keep in mind that an injection is one part of care. Staying active, doing the exercises you are taught, and following up with your provider can make a real difference in how you feel over time.' },
      { type: 'callout', title: 'Call your doctor if', text: 'After the procedure you develop fever, severe or worsening back pain, new weakness, numbness that does not go away, trouble with your bladder or bowels, or a severe headache. For emergencies, call 911.' }
    ],
    takeaways: [
      'An epidural steroid injection places medicine near irritated spinal nerves to help calm pain.',
      'It is done with X-ray guidance and usually takes only a few minutes.',
      'Relief varies from none to several months, and it is often combined with exercise or therapy.',
      'Tell your doctor about medicines, allergies and health conditions beforehand.',
      'Risks are uncommon but real, so talk through them with your doctor.'
    ],
    faqs: [
      {
        q: 'Will I be asleep?',
        a: 'Most people are awake, with the skin numbed. Some offices offer light sedation in certain cases. Ask your care team what applies to you.'
      },
      {
        q: 'Can I drive home afterward?',
        a: 'It depends on whether you receive sedation and how you feel. Ask your office ahead of time and plan a ride if advised.'
      },
      {
        q: 'How many injections will I need?',
        a: 'This varies. Your doctor will look at how you respond and decide on the next steps with you.'
      }
    ],
    relatedServices: ['epidural-steroid-injections']
  },
  {
    slug: 'what-to-expect-at-your-first-pain-management-visit',
    title: 'What to Expect at Your First Pain Management Visit',
    excerpt: 'Starting care for ongoing pain can feel unsure. Here is how a first visit usually goes, what to bring, and the questions worth asking.',
    metaDescription: 'Find out what happens at a first pain management visit, what to bring, how doctors evaluate pain, and which questions to ask.',
    date: '2026-06-18',
    readTime: '5 min',
    category: 'Education',
    image: '/images/blog/what-to-expect-at-your-first-pain-management-visit.jpg',
    imageAlt: 'A doctor in a white coat talking with a patient across a desk',
    position: '50% 50%',
    intro: 'Your first visit to a pain management practice is mostly a conversation. Your doctor wants to learn about you, your pain and your goals. There is no single plan for everyone, and a first visit does not always mean a procedure. Here is a general picture of what may happen.',
    body: [
      { type: 'h2', text: 'Before your visit' },
      { type: 'p', text: 'Your office may ask you to fill out forms about your health history and your pain. Gathering a few things ahead of time can help the visit go smoothly.' },
      { type: 'ul', items: [
        'A list of your current medicines, doses and allergies',
        'Past imaging, such as MRI, CT or X-ray reports, and any images on disc',
        'Notes from other doctors or physical therapists',
        'Your insurance card and photo ID',
        'A short list of your questions and goals'
      ] },
      { type: 'h2', text: 'The conversation' },
      { type: 'p', text: 'Expect your provider to ask many questions. Where is the pain? When did it start? Is it sharp, burning, aching or tingling? What makes it better or worse? How does it affect your sleep, work and mood? It can help to think about your answers before you arrive. There are no wrong answers, and your honest description is the most useful tool.' },
      { type: 'h2', text: 'The physical exam' },
      { type: 'p', text: 'Next comes an exam. Your provider may watch how you stand and walk, check your range of motion, test strength and reflexes, and gently press on areas to find tender spots. Wear comfortable clothing. Tell your provider if any movement hurts so they can stop or adjust.' },
      { type: 'h2', text: 'Reviewing tests and planning next steps' },
      { type: 'p', text: 'Your provider will review any imaging or lab results you brought. Sometimes more tests are needed, and sometimes none are. Then you will talk about a plan. Care often includes several parts that work together.' },
      { type: 'ul', items: [
        'Education about your condition and ways to stay active',
        'Physical therapy or a home exercise program',
        'Medicines, if appropriate',
        'Procedures such as injections or nerve treatments, when they make sense for you',
        'Referrals to other specialists, when needed'
      ] },
      { type: 'p', text: 'Procedures are not always the first step. Many plans begin with less invasive options. If a procedure is recommended, your provider should explain what it is, why it is suggested, the possible benefits and risks, and the other choices.' },
      { type: 'h2', text: 'Questions you might ask' },
      { type: 'ol', items: [
        'What do you think is causing my pain?',
        'What are my options, and what are the pros and cons of each?',
        'How soon might I notice a change, and how will we know it is working?',
        'What should I avoid doing while I recover?',
        'When should I call you or seek urgent care?'
      ] },
      { type: 'h2', text: 'Setting goals that matter to you' },
      { type: 'p', text: 'Pain care is not only about a number on a scale. Many people care about sleeping better, walking farther, working more comfortably or enjoying time with family. Share what matters most to you. Your goals help your provider choose a plan and check progress. Try to be open about fears too, such as worries about medicines or procedures. A good plan respects your comfort and your choices.' },
      { type: 'p', text: 'Finally, be patient with yourself. Pain that has lasted a long time often takes time and several steps to manage. It is fine if you do not have every answer on day one. Your care team will work with you, step by step, and you can always call the office with questions between visits. Many people find it helpful to bring a friend or family member who can listen and take notes.' },
      { type: 'callout', title: 'You are part of the team', text: 'Good pain care is shared decision making. You can ask for plain explanations, take time to think, and say what matters most to you. Results from any treatment vary, and your plan can change as you go.' },
      { type: 'p', text: 'Before you leave, make sure you know your next steps, how to reach the office, and when your follow-up visit is. You can also request an appointment through our website or call the office.' }
    ],
    takeaways: [
      'The first visit is mainly a conversation and an exam.',
      'Bring your medicine list, past imaging and notes from other providers.',
      'A procedure is not always the first step, and many plans start with simpler care.',
      'Ask questions and share your goals so the plan fits you.',
      'Results vary, and your plan may change over time.'
    ],
    faqs: [
      {
        q: 'Will I get treatment at my first visit?',
        a: 'Often the first visit is for evaluation and planning. Whether a treatment happens that day depends on your situation and your doctor.'
      },
      {
        q: 'Do I need a referral?',
        a: 'It depends on your insurance plan. Check with your insurer or call our office to ask before you come in.'
      },
      {
        q: 'Should I take my usual medicines that day?',
        a: 'Unless your office tells you otherwise, take your medicines as usual and bring a list. Ask us if you are unsure.'
      }
    ],
    relatedServices: ['epidural-steroid-injections', 'facet-joint-injections', 'radiofrequency-ablation']
  },
  {
    slug: 'what-is-physiatry',
    title: 'What Is Physiatry?',
    excerpt: 'Physiatrists are doctors who focus on helping you move and function better. Learn what they do and when you might see one.',
    metaDescription: 'Learn what physiatry (physical medicine and rehabilitation) is, what physiatrists treat, and when seeing one may help.',
    date: '2026-06-02',
    readTime: '5 min',
    category: 'Education',
    image: '/images/blog/what-is-physiatry.jpg',
    imageAlt: 'A smiling therapist helping an older woman with a gentle arm stretch in a bright clinic',
    position: '50% 50%',
    intro: 'You may have heard the word physiatry and wondered what it means. It is short for physical medicine and rehabilitation, often called PM&R. A physiatrist is a doctor who looks at how your whole body works and helps you function as well as you can. This article explains the basics in plain words.',
    body: [
      { type: 'h2', text: 'What is a physiatrist?' },
      { type: 'p', text: 'A physiatrist is a medical doctor who treats problems of the muscles, bones, joints, nerves and spine. They are trained to care for people with pain, injury, illness or long-term conditions that affect movement. The goal is usually to reduce pain, improve function and support your quality of life. Physiatrists usually use treatments that do not require surgery, though they can refer you to a surgeon if needed.' },
      { type: 'h2', text: 'A whole-person approach' },
      { type: 'p', text: 'Instead of looking only at a sore spot, a physiatrist considers how you move, work and live. They ask what you want to be able to do, such as walking your dog, lifting a child or getting back to a hobby. Then they build a plan around those goals. This plan often involves a team, such as physical therapists, occupational therapists and other specialists.' },
      { type: 'h2', text: 'What conditions do physiatrists treat?' },
      { type: 'p', text: 'Physiatrists see many kinds of problems. Some common ones include:' },
      { type: 'ul', items: [
        'Back and neck pain',
        'Sciatica and pinched nerves',
        'Arthritis and joint pain',
        'Sports and work injuries',
        'Headaches, including migraine',
        'Nerve conditions and some effects of stroke or injury',
        'Ongoing pain after an injury or surgery'
      ] },
      { type: 'h2', text: 'How do they find the cause?' },
      { type: 'p', text: 'Your visit will start with your story and a hands-on exam. Your doctor may order imaging such as X-ray or MRI, or other tests that check how nerves and muscles work. The goal is to match your symptoms with what is found, since scans alone do not always explain pain.' },
      { type: 'h2', text: 'What treatments might be used?' },
      { type: 'p', text: 'Treatment depends on you. A plan may include one or several of these:' },
      { type: 'ul', items: [
        'Exercise, stretching and physical therapy',
        'Education about posture, movement and pacing',
        'Medicines, when appropriate',
        'Braces or other supports',
        'Targeted injections, such as epidural, facet joint or SI joint injections',
        'Other procedures, such as radiofrequency ablation, for certain types of pain'
      ] },
      { type: 'p', text: 'Many practices combine physiatry with interventional pain management. This means one team can offer both rehabilitation and procedures, depending on what you need. Not every treatment is right for everyone, and results vary.' },
      { type: 'h2', text: 'When to see one and what to expect' },
      { type: 'p', text: 'Consider a visit if pain or limited movement lasts more than a few weeks, keeps coming back, or gets in the way of daily life. You do not need to wait until it is severe.' },
      { type: 'p', text: 'At a first visit, your doctor will talk with you about your symptoms, health history and goals. Bring a list of your medicines and any past scans or records. You will have a physical exam, and you will talk through options together. Some treatments are done in the office, and others, like therapy, are done over time. Progress is often gradual, and your plan may be adjusted as you go.' },
      { type: 'p', text: 'Many people find it comforting to know that physiatrists often follow patients over time. This means your plan can grow and change as you do, and you do not have to figure out each step alone. You are welcome to bring a family member or friend to your visit and to ask as many questions as you need. If something in your plan is not working, say so, and your doctor can adjust it.' },
      { type: 'callout', title: 'Seek urgent care', text: 'Go to the emergency room if you have sudden weakness, loss of bladder or bowel control, numbness in the groin, severe pain after a fall or accident, or signs of stroke such as face drooping or slurred speech.' }
    ],
    takeaways: [
      'Physiatry means physical medicine and rehabilitation (PM&R).',
      'Physiatrists are doctors who focus on function, movement and pain, often without surgery.',
      'They look at the whole person and set goals with you.',
      'Treatment may include therapy, medicine and targeted procedures.',
      'Results vary, so talk to your doctor about what fits you.'
    ],
    faqs: [
      {
        q: 'Is a physiatrist the same as a physical therapist?',
        a: 'No. A physiatrist is a medical doctor who diagnoses and plans care. A physical therapist provides hands-on therapy and exercise. They often work together.'
      },
      {
        q: 'Do physiatrists perform surgery?',
        a: 'Generally no. They focus on non-surgical care and can refer you to a surgeon if that is the right next step.'
      },
      {
        q: 'Can a physiatrist help with chronic pain?',
        a: 'Yes, they often help people with long-term pain build a plan to improve function. Results vary from person to person.'
      }
    ],
    relatedServices: ['epidural-steroid-injections', 'facet-joint-injections', 'radiofrequency-ablation']
  }
];
