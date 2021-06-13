import React from 'react'
import { 
    ProductsContainer,
    ProductsHeading,
    ProductWrapper,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductDesc,
    ProductTitle,
    ProductPrice,
    ProductButton,

} from './Products'
const  Products= ({heading, data}) => {
    return (
        <ProductsContainer>
        <ProductsHeading>{heading}</ProductsHeading>
            <ProductWrapper>
                {data.map((product, i)=>{
                   return(
                       <ProductCard key={i}>
                        <ProductImg src={product.img} alt={product.alt} />
                        <ProductInfo>
                            <ProductTitle>{product.name}</ProductTitle>
                            <ProductDesc>{product.desc}</ProductDesc>
                            <ProductPrice>{product.price}</ProductPrice>
                            <ProductButton>{product.button}</ProductButton>
                        </ProductInfo>

                       </ProductCard>
                   )     
                })}
            </ProductWrapper>
        </ProductsContainer>
    )
}

export default Products
