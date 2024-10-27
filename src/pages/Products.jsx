import {
  Badge,
  Button,
  Card,
  IndexTable,
  useIndexResourceState,
} from "@shopify/polaris";
import { PlusIcon } from "@shopify/polaris-icons";
import React, { useEffect, useState } from "react";
import { productData } from "../assets/data";

const Products = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setProducts(productData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const { selectedResources, allResourcesSelected, handleSelectionChange } =
    useIndexResourceState(products);

  const handlePageChange = (type) => {
    if (type === "next") {
      if (page < Math.ceil(products.length / limit)) {
        setPage(page + 1);
      }
    } else if (type === "previous") {
      if (page > 1) {
        setPage(page - 1);
      }
    }
  };

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const visibleProducts = products.slice(startIndex, endIndex);

  const rowMarkup = visibleProducts.map(
    ({ id, image, title, rules, lastUpdate }, index) => (
      <IndexTable.Row
        id={id}
        key={id}
        selected={selectedResources.includes(id)}
        position={index}
      >
        <IndexTable.Cell>
          <img
            src={image}
            alt={title}
            style={{ width: "40px", height: "40px" }}
          />
        </IndexTable.Cell>
        <IndexTable.Cell>{title}</IndexTable.Cell>
        <IndexTable.Cell>{rules.length}</IndexTable.Cell>
        <IndexTable.Cell>
          <span>{lastUpdate}</span>
        </IndexTable.Cell>
        <IndexTable.Cell>
          {rules.length ? (
            <Badge tone="success">Active</Badge>
          ) : (
            <Badge>No rule</Badge>
          )}
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Button icon={PlusIcon} variant="primary">
            Add rule
          </Button>
        </IndexTable.Cell>
      </IndexTable.Row>
    )
  );

  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "20px",
            fontWeight: 600,
            lineHeight: "24px",
          }}
        >
          Products
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <Button icon={PlusIcon} variant="primary">
            Add Product
          </Button>
        </div>
      </div>
      <Card>
        <IndexTable
          itemCount={products.length}
          selectedItemsCount={
            allResourcesSelected ? "All" : selectedResources.length
          }
          onSelectionChange={handleSelectionChange}
          headings={[
            { title: "Image" },
            { title: "Title product" },
            { title: "Rules" },
            { title: "Last update" },
            { title: "Status" },
            { title: "Action" },
          ]}
          pagination={{
            label: `${page}-${Math.ceil(products.length / limit)} of ${
              products.length
            } products`,
            hasPrevious: page > 1,
            hasNext: page < Math.ceil(products.length / limit),
            onPrevious: () => handlePageChange("previous"),
            onNext: () => handlePageChange("next"),
          }}
        >
          {rowMarkup}
        </IndexTable>
      </Card>
    </div>
  );
};

export default Products;
