import {
  Badge,
  Button,
  Card,
  FormLayout,
  IndexTable,
  Modal,
  TextField,
  useIndexResourceState,
} from "@shopify/polaris";
import { PlusIcon } from "@shopify/polaris-icons";
import React, { useEffect, useState } from "react";
import { productData } from "../assets/data";

const Products = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [products, setProducts] = useState([]);
  const [isAddRuleModalOpen, setIsAddRuleModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
  const [addProductFormData, setAddProductFormData] = useState({
    title: "",
    price: "",
    image: null,
    description: "",
  });

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

  const handleAddRuleModalOpen = (product) => {
    setSelectedProduct(product);
    setIsAddRuleModalOpen(true);
  };

  const handleAddRuleModalClose = () => {
    setIsAddRuleModalOpen(false);
    setSelectedProduct(null);
  };

  const handleAddProductModalOpen = () => {
    setIsAddProductModalOpen(true);
  };

  const handleAddProductModalClose = () => {
    setIsAddProductModalOpen(false);
    setAddProductFormData({
      title: "",
      price: "",
      image: null,
      description: "",
    });
  };

  const handleAddProductFormChange = (fieldName, value) => {
    setAddProductFormData((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  const handleSaveProductModal = () => {
    console.log(addProductFormData);
    setIsAddProductModalOpen(false);
    setAddProductFormData({
      title: "",
      price: "",
      image: null,
      description: "",
    });
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
          <Button
            icon={PlusIcon}
            variant="primary"
            onClick={() => handleAddRuleModalOpen({ title, rules })}
          >
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
          <Button
            icon={PlusIcon}
            variant="primary"
            onClick={handleAddProductModalOpen}
          >
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
      <Modal
        open={isAddRuleModalOpen}
        onClose={handleAddRuleModalClose}
        title={`Detail rule`}
      >
        <Modal.Section>
          <FormLayout>
            <FormLayout.Group condensed>
              <TextField
                type="text"
                label="Title"
                value={selectedProduct?.title}
              />
              <TextField type="text" label="Start date" value={""} />
              <TextField type="text" label="End date" value={""} />
            </FormLayout.Group>
            {selectedProduct?.rules.map((rule, index) => (
              <FormLayout.Group key={index} condensed>
                <TextField type="text" label="Buy from" value={rule.buyFrom} />
                <TextField type="text" label="Buy to" value={rule.buyTo} />
                <TextField
                  type="number"
                  label="Discount of item (%)"
                  value={rule.discount}
                />
              </FormLayout.Group>
            ))}
          </FormLayout>
        </Modal.Section>
      </Modal>

      <Modal
        open={isAddProductModalOpen}
        onClose={handleAddProductModalClose}
        title={`Add product`}
        primaryAction={{
          content: "Save",
          onAction: handleSaveProductModal,
        }}
        secondaryActions={[
          {
            content: "Cancel",
            onAction: handleAddProductModalClose,
          },
        ]}
      >
        <Modal.Section>
          <FormLayout>
            <TextField
              type="text"
              label="Title"
              value={addProductFormData?.title}
              onChange={(e) => handleAddProductFormChange("title", e)}
            />
            <TextField
              type="text"
              label="Price"
              value={addProductFormData.price}
              onChange={(e) => handleAddProductFormChange("price", e)}
            />
            <TextField
              type="file"
              label="Image"
              value={""}
              onChange={(e) => handleAddProductFormChange("image", e)}
            />
            <TextField
              type="text"
              label="Description"
              value={addProductFormData.description}
              onChange={(e) => handleAddProductFormChange("description", e)}
            />
          </FormLayout>
        </Modal.Section>
      </Modal>
    </div>
  );
};

export default Products;
