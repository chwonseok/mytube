export const trending = (req, res) => res.render('home');
export const search = (req, res) => res.send('Search Videos');
export const see = (req, res) => {
  return res.send(`See Videos #${req.params.id}`);
};
export const edit = (req, res) => res.send('Edit Videos');
export const remove = (req, res) => res.send('Remove Videos');
export const upload = (req, res) => res.send('Upload Videos');
