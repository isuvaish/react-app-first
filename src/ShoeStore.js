import React from 'react';

export const ShoeStore = ({ shoes }) => (
<table>
  {shoes.map(shoe => 
  <tr><h4>{shoe.name}</h4>
  <h6>{shoe.brand}</h6></tr>
  )}
</table>
);
