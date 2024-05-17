import { Link } from "react-router-dom";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";

const BreadcrumbItemLink = ({ to, children }) => (
    <BreadcrumbItem>
        <BreadcrumbLink asChild>
            <Link to={to}>{children}</Link>
        </BreadcrumbLink>
    </BreadcrumbItem>
);

const PageBreadcrumb = ({ items }) => {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                {items.map((item, index) => (
                    <React.Fragment key={index}>
                        {index !== 0 && <BreadcrumbSeparator />}
                        {item.to ? (
                            <BreadcrumbItemLink to={item.to}>{item.label}</BreadcrumbItemLink>
                        ) : (
                            <BreadcrumbItem>
                                <BreadcrumbPage>{items[items.length - 1].label}</BreadcrumbPage>
                            </BreadcrumbItem>
                        )}
                    </React.Fragment>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    );
};

export default PageBreadcrumb;
