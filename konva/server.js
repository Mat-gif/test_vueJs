const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('dist'));

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


/*npm instal express */

/*creer le server.js */

/* Dans public.index

<body>
<div id="app"></div>
<script src="main.js"></script>
</body>

*/

/* npm run build*/

/* npm serveur.js*/