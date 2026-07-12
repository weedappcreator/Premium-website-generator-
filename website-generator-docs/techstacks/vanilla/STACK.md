# Tech Stack: Vanilla HTML/CSS/JS

## When to Use

- Simple landing pages
- No build step needed
- Shared hosting
- Email templates
- Maximum compatibility

## Structure

```
/
├── index.html
├── about.html
├── css/
│   ├── style.css
│   └── responsive.css
├── js/
│   └── main.js
└── images/
```

## Best Practices

- Semantic HTML5
- CSS custom properties (variables)
- Mobile-first responsive design
- Minimal JS (progressive enhancement)
- Compressed images
- Inline critical CSS

## Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title</title>
  <meta name="description" content="Page description for SEO">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header>...</header>
  <main>...</main>
  <footer>...</footer>
  <script src="js/main.js" defer></script>
</body>
</html>
```
