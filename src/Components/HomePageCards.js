import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Card, CardGroup, Col, Row, Container } from 'react-bootstrap';
import Message from './Message';
import Loader from './Loader';
import Paginate from './Paginate';
import ProductCarousel from '../Components/ProductCarousel';
import ProductCard from '../Product/ProductCard';
import { listProducts } from '../actions/productActions';

const HomePageCards = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className='pt-5 px-5'>
      <Container fluid>
        <ProductCarousel />
        <h1>Latest Products</h1>
        <CardGroup className='gap-4'>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant='danger'>{error}</Message>
          ) : (
            <>
              <Row>
                {products.map((product) => (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <ProductCard product={product} />
                  </Col>
                ))}
              </Row>
            </>
          )}
        </CardGroup>
      </Container>
    </div>
  );
};

export default HomePageCards;
