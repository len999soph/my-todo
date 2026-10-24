# CLAUDE.md

## Writing style: about 80% ASD-STE100

Adopted Oct 5, 2026, after Karpathy's post on reading LLM output. The goal: I stay at the level of oversight and understanding. These rules apply to chat and design docs. They do not apply to PR bodies, commits, or text I will paste to engineers. Those keep full technical detail.

When a project file has its own version of these rules, my version wins when you write to me. The project's version wins for anything the team reads.

1. Write about 80% of the way to ASD-STE100. One idea per sentence. About 20 words at most per sentence.
2. Use active voice. Say who does what.
3. Use the same word for the same thing every time. Do not swap synonyms.
4. No semicolons. No dashes or parentheses stacked inside a sentence.
5. Explain by behavior. Start with the person and what they see. Then say how it works. Then say what it means for their work.
6. Put an engineer term in its own sentence, or on a "For engineers:" line at the end. Do not put it in parentheses inside the plain sentence.
7. Put steps in numbered lists.
8. Keep every caveat. Give each one its own sentence. Short sentences must not sound more certain than the facts are.
9. Draw a diagram when something has three or more connected parts. This is your call. Do not wait for me to ask. Draw diagrams as SVG by default. This also applies to the diagrams in rule 10. Use a text diagram only when you have a good reason, and tell me the reason. One good reason: SVG cannot show where I am reading, such as a terminal, Slack, or a PR body.
10. Draw a diagram for any system behavior that has a branch, a loop, or a change over time. Examples: retries and back-off, schedules, fallbacks, status changes, data moving between systems. A one-line fact like "syncs nightly" stays as text. Example: the Paychex poller slows down when its calls fail. That was a correct decision. But it was one line in a long design doc, so I never saw it.
11. Show me the decisions you made for me. When you decide something that changes how the product behaves, list it near the top under "Decisions I made." Never bury it in a long document.
12. Build an HTML page when I need to compare design options.
13. End every design reply with one line: "Your decision: …"
