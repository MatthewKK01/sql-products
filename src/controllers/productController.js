export const getProduct = async (_, res) => {
  try {
    const query = await pool.query("SELECT * from products");
    const rows = query.rows;

    return res.status(200).json(rows);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const createProduct = async (req, res) => {
  const { title, price } = req.body;
  try {
    const query = await pool.query(
      "INSERT INTO products(title, price) VALUES ($1, $2)",
      [title, price]
    );
    const row = query.rows[0];
    return res.status(201).json(row);
  } catch (error) {
    return res.status(401).json(error);
  }
};

export const deleteProduct = async (req, res) => {
  const id = +req.params.id;
  try {
    const query = await pool.query("DELETE FROM products WHERE ID=$1", [id]);
    return res.status(201).json({ message: "product deleted" });
  } catch (error) {
    return res.status(401).json(error);
  }
};
