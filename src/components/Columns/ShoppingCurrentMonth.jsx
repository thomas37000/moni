import { useState, useEffect } from 'react';
import { Table, Typography } from 'antd';
import { supabase } from '../../api/supabase';
import columns from '../Columns/Columns';
// import './ShoppingList.css';

const { Title } = Typography;

const ShoppingCurrentMonth = () => {
  const [shopLists, setShopLists] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();
  // nextMonth
  /* On vérifie si le mois actuel est décembre.
   * Si TRUE, le mois suivant est janvier de l'année suivante,
   * sinon c'est simplement le mois suivant.
   */
  const nextMonth = currentMonth === 12 ? 1 : currentMonth + 1;
  // nextYear
  /* On vérifie si le mois actuel est décembre,
   * l'année suivante est utilisée, sinon, c'est simplement l'année actuelle.
   * Si TRUE, le mois suivant est janvier de l'année suivante,
   * sinon c'est simplement l'année actuelle.
   */
  const nextYear = currentMonth === 12 ? currentYear + 1 : currentYear;

  const currentMonthString = new Date().toLocaleString('fr-FR', {
    month: 'long',
  });

  const monthYear =
    currentMonthString.charAt(0).toUpperCase() + currentMonthString.slice(1);

  useEffect(() => {
    getShopLists();
  }, []);

  async function getShopLists() {
    try {
      const { data, error } = await supabase
        .from('shopping_list')
        .select()
        .order('created_at', { ascending: false })
        // Utilisation de la méthode padStart pour formater le mois avec deux chiffres,
        // ajoutant un '0' à gauche si nécessaire (par exemple, '5' devient '05')
        .gte(
          'created_at',
          `${currentYear}-${currentMonth.toString().padStart(2, '0')}-01`
        )
        .lt(
          'created_at',
          `${nextYear}-${nextMonth.toString().padStart(2, '0')}-01`
        );

      if (error) {
        console.error(error);
        setError(error);
        /*
         *  Ancien code :
         * .gte('created_at', `${currentYear}-${currentMonth}-01`) // Sélectionne les tickets dont la date de création est > ou = au premier jour du mois actuel.
         * .lt('created_at', `${currentYear}-${currentMonth + 1}-01`); // Prochain 1er jour du mois
         *
         * Commentaire explicatif :
         * La logique d'incrémentation du mois dans .lt('created_at', `${currentYear}-${currentMonth + 1}-01`) pouvait entraîner un problème lorsqu'on était en décembre.
         * En JavaScript, les mois sont indexés à partir de zéro, ce qui signifie que décembre est représenté par 11.
         * Ajouter 1 directement à cette valeur aurait conduit à '13' (janvier de l'année suivante),
         * ce qui a généré une erreur dans la requête de base de données.
         * La correction est en utilisant une condition pour gérer le cas particulier du mois de décembre
         * et en ajustant le formatage des mois pour s'assurer qu'ils ont toujours deux chiffres.
         */
      } else {
        setShopLists(data);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError(error);
      setLoading(false);
    }
  }

  if (loading) return <p>Loading ...</p>;
  if (error !== null) return <p>Problème avec l`&apos;`Api...</p>;

  return (
    <>
      <Title level={4} type="secondary">
        Liste de courses sur le mois{' '}
        {monthYear === 'Avril' ||
        monthYear === 'Août' ||
        monthYear === 'Octobre'
          ? `d' ${monthYear} ${currentYear}`
          : `de ${monthYear} ${currentYear}`}
      </Title>

      <Table
        columns={columns}
        dataSource={
          shopLists &&
          shopLists.map((shop, index) => ({ ...shop, key: shop.uuid || index }))
        }
      />
    </>
  );
};

export default ShoppingCurrentMonth;
