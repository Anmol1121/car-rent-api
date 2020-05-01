const PROD = false;
const lex = require('greenlock-express').create({
  version: 'draft-11',  server: PROD ? 'https://acme-v02.api.letsencrypt.org/directory' : 'https://acme-staging-v02.api.letsencrypt.org/directory',  approveDomains: (opts, certs, cb) => {
    if (certs) {
      // change domain list here
      opts.domains = ['example.com', 'yourdomain.com']
    } else { 

      opts.email = '2016.anmol.ranglani@ves.ac.in'; 
      opts.agreeTos = true;
    }
    cb(null, { options: opts, certs: certs });
  }  
  
});

const middlewareWrapper = lex.middleware;