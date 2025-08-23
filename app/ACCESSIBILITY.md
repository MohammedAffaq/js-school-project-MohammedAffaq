Accessibility Improvements – Timeline App

This document outlines the accessibility features and WCAG 2.1 AA compliance improvements implemented in the Timeline App.

🎯 Goals

Ensure the app is usable by people with disabilities.

Follow WCAG 2.1 AA guidelines for accessibility.

Provide semantic structure, ARIA roles, and full keyboard support.

✅ Implemented Accessibility Features

1. Semantic HTML & ARIA Roles

Used role="dialog" on the modal to identify it as a dialog box.

Added aria-labelledby and aria-describedby on the modal for screen reader support.

Marked active timeline markers with aria-current="true".

Ensured images have descriptive alt text.

2. Keyboard Navigation

Timeline markers are reachable via Tab and Arrow keys.

Modal can be closed with the Esc key or the Close button.

Focus is trapped inside the modal while it’s open.

Focus is restored to the triggering timeline marker when the modal is closed.

3. Focus Management

First focusable element inside the modal (Close button) gets focus on open.

Focus returns to the last clicked timeline marker after closing the modal.

4. Color Contrast

Verified all text and background color combinations meet WCAG 2.1 AA contrast ratio of at least 4.5:1.

Both light mode and dark mode maintain proper contrast.

5. Screen Reader Support

Timeline markers and modal content are properly announced by screen readers.

Event titles and descriptions are exposed with ARIA attributes.

Buttons use clear, descriptive labels.

6. Other WCAG Requirements

Responsive design works across all screen sizes.

No flashing animations that could trigger seizures.

Interactive elements (buttons, markers) have visible focus indicators.

🚀 Outcome

The Timeline App is now:

✅ Navigable entirely by keyboard.

✅ Usable with screen readers.

✅ Compliant with WCAG 2.1 AA color contrast requirements.

✅ Fully functional in light and dark themes with accessibility preserved.